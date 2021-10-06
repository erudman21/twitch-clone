import { Field, InputType } from "type-graphql";
import { User } from "../entities/User";

@InputType()
export class RegisterInput implements Partial<User> {
  @Field(() => String)
  email!: string;

  @Field(() => String)
  username!: string;

  @Field(() => String)
  password!: string;

  @Field(() => Date)
  birthdate!: Date;
}

@InputType()
export class LoginInput implements Partial<User> {
  @Field(() => String)
  username!: string;

  @Field(() => String)
  password!: string;
}
