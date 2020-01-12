import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/ecommerce/models/product.model';
import { MovieServiceService } from 'src/app/ecommerce/services/movie-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
movies: Observable<Product[]>;

  constructor(private movieService: MovieServiceService, private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
   this.movies = this.movieService.getAllMovies();
  }
  deleteMovie(id: number){
    if(confirm("Are you sure to delete it "+id)){
      this.movieService.deleteMovie(id).subscribe(
        data => {
          console.log(data);
          this.reloadData();
          this.router.navigate(['/admin']);
        }, error => console.log(error));
    }
  }
  movieDetails(id: number){
    this.router.navigate(['detailsMovie', id]);
  }
  createMovie(){
    this.router.navigate(['addMovie']);
  }
  updateMovie(id: number){
    this.router.navigate(['updateMovie', id]);
  }

}
