import { Args, Float, Int, Query, Resolver } from '@nestjs/graphql';
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

  @Query((returns) => Movie, { nullable: true })
  async movie(@Args({ name: 'id', type: () => Int }) id: number) {
    return this.movieService.getMovie(id);
  }

  @Query((returns) => [Movie])
  async suggestions(@Args({ name: 'id', type: () => Int }) id: number) {
    return this.movieService.getSuggestions(id);
  }
}
