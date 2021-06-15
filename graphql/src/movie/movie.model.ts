import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Movie {
  @Field((type) => Int)
  id: number;
  @Field()
  name: string;
  @Field()
  score: number;
}
