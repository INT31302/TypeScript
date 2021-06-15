import { Args, Float, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Movie } from './movie.model';
import { MovieService } from './movie.service';

@Resolver((of) => Movie)
export class UserResolver {
  constructor(private readonly movieService: MovieService) {}

  @Query((returns) => [Movie], { nullable: true })
  async movies(
    @Args({ name: 'limit', type: () => Int, nullable: true, defaultValue: 0 })
    limit: number,
    @Args({
      name: 'rating',
      type: () => Float,
      nullable: true,
      defaultValue: 0,
    })
    rating: number,
  ) {
    return this.movieService.getMovies(limit, rating);
  }

  // @Query((returns) => Movie, { nullable: true })
  // async movie(@Args('id', { type: () => Int }) id: number) {
  //   return this.movieService.getById(id);
  // }

  // @Mutation((returns) => Boolean, { nullable: true })
  // async deleteMovie(@Args('id', { type: () => Int }) id: number) {
  //   return this.movieService.deleteMovie(id);
  // }

  // @Mutation((returns) => Movie)
  // async addMovie(
  //   @Args('name') name: string,
  //   @Args('score', { type: () => Float }) score: number,
  // ) {
  //   return this.movieService.addMovie(name, score);
  // }
}
