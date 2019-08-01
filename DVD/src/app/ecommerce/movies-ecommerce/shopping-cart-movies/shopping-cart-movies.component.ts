import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MovieOrders } from 'src/app/entities/MovieOrders';
import { Subscription } from 'rxjs/internal/Subscription';
import { MovieEcommerceService } from 'src/app/services/MovieEcommerceService';
import { MovieOrder } from 'src/app/entities/MovieOrder';
import { ThrowStmt } from '@angular/compiler';


@Component({
  selector: 'app-shopping-cart-movies',
  templateUrl: './shopping-cart-movies.component.html',
  styleUrls: ['./shopping-cart-movies.component.css']
})
export class ShoppingCartMoviesComponent implements OnInit {
  orderFinished: boolean;
  orders: MovieOrders;
  total: number;
  sub: Subscription;

  @Output() onOrderFinished: EventEmitter<boolean>;

  constructor(private movieService: MovieEcommerceService) {
    this.total = 0;
    this.orderFinished = false;
    this.onOrderFinished = new EventEmitter<boolean>();
   }

  ngOnInit() {
    this.orders = new MovieOrders();
    this.loadCart();
    this.loadTotal();
  }
  private calculateTotal(movies: MovieOrder[]): number {
        let sum = 0;
         movies.forEach(value => {
           sum += (value.movie.price * value.quantity);
         });
        return sum;
  }
  ngOnDestroy(){
    this.orderFinished = true;
    this.movieService.Total = this.total;
    this.onOrderFinished.emit(this.orderFinished);
  }
  loadTotal() {
   this.sub = this.movieService.OrdersChanged.subscribe(() => {
        this.total = this.calculateTotal(this.orders.movieOrders);
   });
  }
  loadCart() {
    this.sub = this.movieService.MovieOrderChanged.subscribe(() => {
      let movieOrder = this.movieService.SelectedMovieOrder;
      if(movieOrder){
        this.orders.movieOrders.push(new MovieOrder(
          movieOrder.movie, movieOrder.quantity));
      }
      this.movieService.MovieOrders = this.orders;
      this.orders = this.movieService.MovieOrders;
      this.total = this.calculateTotal(this.orders.movieOrders);
    });
  }

  reset(){
    this.orderFinished = false;
    this.orders = new MovieOrders();
    this.orders.movieOrders = [];
    this.loadTotal();
    this.total = 0;
  }

}
