import { Injectable } from '@nestjs/common';
import { Movie } from './movie.model';

@Injectable()
export class MovieService {
  private movies: Movie[] = [
    {
      id: 0,
      name: 'Star wars - The new one',
      score: 0.1,
    },

    {
      id: 1,
      name: 'Avengers - The new one',
      score: 8,
    },
    {
      id: 2,
      name: 'The Godfather I',
      score: 99,
    },
    {
      id: 3,
      name: 'Logan',
      score: 2,
    },
  ];

  getMovies(): Movie[] {
    return this.movies;
  }

  getById(id: number): Movie {
    const filteredMovie = this.movies.filter((movie) => id === movie.id);
    return filteredMovie[0];
  }

  deleteMovie(id: number): boolean {
    const cleanedMovies = this.movies.filter((movie) => movie.id !== id);
    if (this.movies.length > cleanedMovies.length) {
      this.movies = cleanedMovies;
      return true;
    } else {
      return false;
    }
  }

  addMovie(name: string, score: number) {
    const newMovie = {
      id: parseInt(`${this.movies.length}`),
      name,
      score,
    };
    this.movies.push(newMovie);
    return newMovie;
  }
}
