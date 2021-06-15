import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Movie {
  @Field((type) => Int)
  id: number;

  @Field()
  title: string;

  @Field()
  rating: number;

  @Field()
  summary: string;

  @Field()
  language: string;

  @Field()
  medium_cover_image: string;
}
