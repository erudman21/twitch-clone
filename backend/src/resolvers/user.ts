import bcrypt from "bcryptjs";
import {
  Arg,
  Ctx,
  FieldResolver,
  Mutation,
  Query,
  Resolver,
  Root,
  UseMiddleware,
} from "type-graphql";
import { getConnection } from "typeorm";
import { COOKIE_NAME, SALT_ROUNDS } from "../constants";
import { Follow } from "../entities/Follow";
import { User } from "../entities/User";
import { isAuth } from "../middleware/isAuth";
import { MyContext } from "../types";
import { pickColor } from "../utils/pickColor";
import { validateInput } from "../utils/validateInput";
import { LoginInput, RegisterInput } from "./inputTypes";
import { UserResponse } from "./objectTypes";

const loginError = {
  field: "username",
  message: "Username or password is incorrect",
};

@Resolver(User)
export class UserResolver {
  @Mutation(() => UserResponse)
  async register(
    @Arg("registerInput", () => RegisterInput) data: RegisterInput,
    @Ctx() { req }: MyContext
  ): Promise<UserResponse> {
    if (process.env.__prod__ && !validateInput(data)) {
      return {
        errors: [loginError],
      };
    }

    const hashedPassword = await bcrypt.hash(data.password, SALT_ROUNDS);
    const userColor = pickColor();

    let newUser;
    try {
      const res = await getConnection()
        .createQueryBuilder()
        .insert()
        .into(User)
        .values({
          username: data.username,
          email: data.email,
          password: hashedPassword,
          birthdate: data.birthdate,
          color: userColor,
        })
        .returning("*")
        .execute();

      newUser = res.raw[0];
    } catch (err) {
      return {
        errors: [
          {
            field: "username",
            message: "Username already exists",
          },
        ],
      };
    }

    req.session.userId = newUser.id;

    return { user: newUser };
  }

  @Mutation(() => UserResponse)
  async login(
    @Ctx() { req }: MyContext,
    @Arg("loginInput") loginInput: LoginInput
  ): Promise<UserResponse> {
    const user = await User.findOne({ username: loginInput.username });

    if (!user) {
      return {
        errors: [loginError],
      };
    }

    const valid = await bcrypt.compare(loginInput.password, user.password);

    if (!valid) {
      return {
        errors: [loginError],
      };
    }

    req.session.userId = user.id;

    return { user };
  }

  @Query(() => User, { nullable: true })
  me(@Ctx() { req }: MyContext) {
    if (!req.session.userId) {
      return null;
    }
    return User.findOne(req.session.userId);
  }

  @Mutation(() => Boolean)
  logout(@Ctx() { req, res }: MyContext) {
    // have to wait for callback to complete or else express will try to clear cookie after we've returned
    return new Promise((resolve) => {
      req.session.destroy((err) => {
        if (err) {
          console.log(err);

          resolve(false);
          return;
        }

        res.clearCookie(COOKIE_NAME);
        resolve(true);
      });
    });
  }

  @Query(() => [User])
  allUsers() {
    return User.find();
  }

  @FieldResolver(() => [Follow])
  async followers(@Root() user: User): Promise<Follow[]> {
    return await Follow.find({
      where: { following: { id: user.id } },
      relations: ["follower"],
    });
  }

  @FieldResolver(() => [Follow])
  async following(@Root() user: User): Promise<Follow[]> {
    return Follow.find({
      where: { follower: { id: user.id } },
      relations: ["following"],
    });
  }
}
