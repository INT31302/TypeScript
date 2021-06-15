import { Query, Resolver } from '@nestjs/graphql';
import { getById, people } from './db';

@Resolver()
export class UserResolver {
  @Query()
  async people() {
    return people;
  }
}
