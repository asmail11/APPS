import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/entities/Movie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: Observable<Movie[]>;

  constructor(private movieService: MovieService, private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }
  reloadData(){
    this.movies = this.movieService.getAllMovies();
  }
  deleteMovie(id: number){
    if(confirm("Are you sure to delete "+id)) {
    this.movieService.deleteMovie(id).subscribe(
      data => {
      console.log(data);
      this.reloadData();
      this.router.navigate(['/']);
    }, error => console.log(error));
  }
  }

  movieDetails(id: number) {
    this.router.navigate(['detailsMovie', id]);
  }
  createMovie(){
    this.router.navigate(['addMovie']);
  }
  updateMovie(id: number){
    this.router.navigate(['updateMovie', id]);
  }
}
