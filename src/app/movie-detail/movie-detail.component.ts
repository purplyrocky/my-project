import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Movie } from '../models/movie';
import { MovieService } from '../services/movie.service';

@Component({
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  public movie: Movie;
  public movieId: number;

  constructor(private movieService: MovieService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.movieId = this.activatedRoute.snapshot.params.id;
    this.movie = this.movieService.getMovieById(this.movieId);
  }

}
