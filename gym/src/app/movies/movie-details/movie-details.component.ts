import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../services/movie.service';
import {Movie} from '../../model/Movie';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  constructor(private movieService: MovieService, private route: ActivatedRoute) { }

  idMovie: string;
  movies: Movie[];
  movie: Movie = new Movie();

  ngOnInit() {
    this.idMovie = this.route.snapshot.params.idMovie;
    this.movieService.getMovieByDetails(this.idMovie).subscribe(data => {
      this.movies = data;
      this.movies.forEach(movie => {
        this.movie = movie;
      });
    });
  }

}
