import { Field, ID, Int, ObjectType } from "type-graphql";
import {
  BaseEntity,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User";

@ObjectType()
@Entity()
export class Follow extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  followId: number;

  @Field()
  @ManyToOne(() => User, (user) => user.following, { cascade: true })
  follower: User;

  @Field()
  @ManyToOne(() => User, (user) => user.followers, { cascade: true })
  following: User;

  @Field(() => Date)
  @CreateDateColumn()
  followedOn: Date;
}
