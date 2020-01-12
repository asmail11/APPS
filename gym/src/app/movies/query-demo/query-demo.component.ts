import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../services/movie.service';
import {Movie} from '../../model/Movie';

@Component({
  selector: 'app-query-demo',
  templateUrl: './query-demo.component.html',
  styleUrls: ['./query-demo.component.css']
})
export class QueryDemoComponent implements OnInit {

  movieId: Movie = new Movie();
  years: Movie[];
  movieTitle: Movie = new Movie();
  movieDirector: Movie[];
  movieActorsId: Movie[];
  movieSearch: Movie[];
  movieBetween: Movie[];

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.findMovieTitle().subscribe(title => {
        this.movieTitle = title;
    });

    this.movieService.findMovieYear().subscribe(years => {
      this.years = years;
    });

    this.movieService.findMovieId().subscribe(id => {
      this.movieId = id;
    });

    this.movieService.findMovieDirectorID().subscribe(director => {
      this.movieDirector = director;
    });

    this.movieService.findMovieActorsId().subscribe(actors => {
      this.movieActorsId = actors;
      console.log(this.movieActorsId);
    });

    this.movieService.findMovieSearch().subscribe(search => {
      this.movieSearch = search;
    });

    this.movieService.findMovieBetweenYear().subscribe(between => {
      this.movieBetween = between;
    });
  }

}
