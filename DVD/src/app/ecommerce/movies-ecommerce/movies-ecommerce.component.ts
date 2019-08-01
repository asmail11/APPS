import { Component, OnInit, ViewChild } from '@angular/core';
import { MovieMoviesComponent } from './movie-movies/movie-movies.component';
import { ShoppingCartMoviesComponent } from './shopping-cart-movies/shopping-cart-movies.component';
import { OrderMoviesComponent } from './order-movies/order-movies.component';

@Component({
  selector: 'app-movies-ecommerce',
  templateUrl: './movies-ecommerce.component.html',
  styleUrls: ['./movies-ecommerce.component.css']
})
export class MoviesEcommerceComponent implements OnInit {
  private collapsed = true;
  orderFinished = false;

  @ViewChild('moviesMoviesC')
  moviesMoviesC: MovieMoviesComponent;

  @ViewChild('ShoppingCartMoviesC')
  ShoppingCartMoviesC: ShoppingCartMoviesComponent;

  @ViewChild('ordersMoviesC')
  ordersMoviesC: OrderMoviesComponent;

  constructor() { }

  ngOnInit() {
  }

  toggaleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }
  finishOrder(orderFinished: boolean){
    this.orderFinished = orderFinished;
  }
  reset() {
    this.orderFinished = false;
    this.moviesMoviesC.reset();
    this.ShoppingCartMoviesC.reset();
    this.ordersMoviesC.paid = false;
}
}
