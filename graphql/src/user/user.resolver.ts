import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { getById, people } from './db';
import { User } from './user.model';

@Resolver((of) => User)
export class UserResolver {
  @Query((returns) => [User], { nullable: true })
  async people() {
    return people;
  }
  @Query((returns) => User, { nullable: true })
  async person(@Args('id', { type: () => Int }) id: number) {
    return getById(id);
  }
}
