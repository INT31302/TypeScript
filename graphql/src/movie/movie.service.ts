import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { Movie } from './movie.model';

@Injectable()
export class MovieService {
  private BASE_URL = 'https://yts.mx/api/v2/';
  private LIST_MOVIES_URL = `${this.BASE_URL}list_movies.json`;
  private MOVIE_DETAILS_URL = `${this.BASE_URL}movie_details.json`;
  private MOVIE_SUGGESTIONS_URL = `${this.BASE_URL}movie_suggestions.json`;

  async getMovies(limit: number, rating: number): Promise<[Movie]> {
    const {
      data: {
        data: { movies },
      },
    } = await axios(this.LIST_MOVIES_URL, {
      params: {
        limit,
        minimum_rating: rating,
      },
    });
    return movies;
  }

  async getMovie(id: number): Promise<Movie> {
    const {
      data: {
        data: { movie },
      },
    } = await axios(this.MOVIE_DETAILS_URL, {
      params: {
        movie_id: id,
      },
    });
    return movie;
  }

  async getSuggestions(id: number): Promise<[Movie]> {
    const {
      data: {
        data: { movies },
      },
    } = await axios(this.MOVIE_SUGGESTIONS_URL, {
      params: {
        movie_id: id,
      },
    });
    return movies;
  }
}
