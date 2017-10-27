import { Injectable } from '@angular/core';

import * as _ from "lodash";

import { Movies } from '../models/movies';
import { Movie } from '../models/movie';

@Injectable()
export class MovieService {
  public movieList: Array<Movie>;
  public movie: Movie;

  constructor() {
    this.movieList = Movies;
  }

  public getMovies(): Array<Movie> {
    console.log('my movie list', this.movieList);
    return this.movieList;
  }

  public getMovieById(id: number): Movie {
    this.movieList.forEach(m => {
      if (m.id === id) { this.movie = m; }
    });
    return this.movie;
  }

}
