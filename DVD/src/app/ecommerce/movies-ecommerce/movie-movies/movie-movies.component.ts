import { Component, OnInit } from '@angular/core';
import { MovieOrder } from 'src/app/entities/MovieOrder';
import { Movie } from 'src/app/entities/Movie';
import { MovieOrders } from 'src/app/entities/MovieOrders';
import { Subscription } from 'rxjs';
import { MovieEcommerceService } from 'src/app/services/MovieEcommerceService';

@Component({
  selector: 'app-movie-movies',
  templateUrl: './movie-movies.component.html',
  styleUrls: ['./movie-movies.component.css']
})
export class MovieMoviesComponent implements OnInit {
  moviesOrders: MovieOrder[] = [];
  movies: Movie[] = [];
  selectedMovieOrder: MovieOrder;
  private shoppingCartOrders: MovieOrders;
  sub: Subscription;
  movieSelected: boolean = false;

  constructor(private movieService: MovieEcommerceService) { }

  ngOnInit() {
    this.moviesOrders = [];
    this.loadMovies();
    this.loadOrders();
    }
   addToCart(order: MovieOrder){
     this.movieService.SelectedMovieOrder = order;
     this.selectedMovieOrder = this.movieService.SelectedMovieOrder;
     this.movieSelected = true;
   } 
   removeFromCart(movieOrder: MovieOrder){
     let index = this.getMovieIndex(movieOrder.movie);
     if(index > -1){
       this.shoppingCartOrders.movieOrders.slice(
         this.getMovieIndex(movieOrder.movie), 1);
     }
     this.movieService.MovieOrders = this.shoppingCartOrders;
     this.shoppingCartOrders = this.movieService.MovieOrders;
     this.movieSelected = false;
   }
  getMovieIndex(movie: Movie): number {
    return this.movieService.MovieOrders.movieOrders.findIndex(
      value => value.movie === movie
    );
  }
  isMovieSelected(movie: Movie): boolean{
    return this.getMovieIndex(movie) > -1;
  }
  loadOrders() {
    this.movieService.getAllMovies()
    .subscribe(
      (movies: any[]) => {
        this.movies = movies;
        this.movies.forEach(movie => {
          this.moviesOrders.push(new MovieOrder(movie, 0));
        })
      }, (error) => console.log(error)
    );
  }
  loadMovies() {
    this.sub = this.movieService.OrdersChanged.subscribe(() => {
      this.shoppingCartOrders = this.movieService.MovieOrders;
    });
  }
  reset() {
    this.moviesOrders = [];
    this.loadMovies();
    this.movieService.MovieOrders.movieOrders = [];
    this.loadOrders();
    this.movieSelected = false;
}
}
