import { Injectable } from '@nestjs/common';
import fetch from 'node-fetch';
import { Movie } from './movie.model';

@Injectable()
export class MovieService {
  private API_URL = 'https://yts.mx/api/v2/list_movies.json?';

  getMovies(limit: number, rating: number) {
    let REQUSET_URL = this.API_URL;
    if (limit > 0) REQUSET_URL += `limit=${limit}`;
    if (rating > 0) REQUSET_URL += `&minimum_rating=${rating}`;
    return fetch(`${REQUSET_URL}`)
      .then((res) => res.json())
      .then((json) => json.data.movies);
  }

  //   getById(id: number) {
  //     const filteredMovie = this.movies.filter((movie) => id === movie.id);
  //     return filteredMovie[0];
  //   }

  //   deleteMovie(id: number): boolean {
  // const cleanedMovies = this.movies.filter((movie) => movie.id !== id);
  // if (this.movies.length > cleanedMovies.length) {
  //   this.movies = cleanedMovies;
  // return true;
  // } else {
  //   return false;
  // }
  //   }

  //   addMovie(name: string, score: number) {
  // const newMovie = {
  //   id: parseInt(`${this.movies.length}`),
  //   name,
  //   score,
  // };
  // this.movies.push(newMovie);
  // return newMovie;
  //   }
}
