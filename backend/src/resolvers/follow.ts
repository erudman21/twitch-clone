import { isAuth } from "./../middleware/isAuth";
import { Arg, Int, Mutation, Resolver, UseMiddleware } from "type-graphql";
import { Follow } from "../entities/Follow";
import { User } from "../entities/User";
import { getRepository } from "typeorm";

@Resolver()
export class FollowResolver {
  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async addFollow(
    @Arg("followerId", () => Int) followerId: number,
    @Arg("followingId", () => Int) followingId: number
  ) {
    const follower = await User.findOne({ id: followerId });
    const following = await User.findOne({ id: followingId });

    await Follow.create({ follower, following }).save();

    return true;
  }

  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async unfollow(
    @Arg("followerId", () => Int) followerId: number,
    @Arg("followingId", () => Int) followingId: number
  ) {
    const users = await getRepository(User)
      .createQueryBuilder("user")
      .where("user.id IN (:...users)", { users: [followerId, followingId] })
      .getMany();
    const follower = await User.findOne({ id: followerId });
    const following = await User.findOne({ id: followingId });

    await Follow.delete({ follower, following });
    return true;
  }
}
