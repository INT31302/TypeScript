import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field((type) => Int)
  id: number;
  @Field()
  name: string;
  @Field()
  age: number;
  @Field()
  gender: string;
}
