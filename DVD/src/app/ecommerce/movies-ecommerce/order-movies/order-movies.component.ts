import { Component, OnInit } from '@angular/core';
import { MovieOrders } from 'src/app/entities/MovieOrders';
import { Subscription } from 'rxjs/internal/Subscription';
import { MovieEcommerceService } from 'src/app/services/MovieEcommerceService';

@Component({
  selector: 'app-order-movies',
  templateUrl: './order-movies.component.html',
  styleUrls: ['./order-movies.component.css']
})
export class OrderMoviesComponent implements OnInit {
  orsers: MovieOrders;
  total: number;
  paid: boolean;
  sub: Subscription;

  constructor(private movieService: MovieEcommerceService) { 
    this.orsers = this.movieService.MovieOrders;
  }

  ngOnInit() {
    this.paid = false;
    this.sub = this.movieService.OrdersChanged.subscribe(() => {
      this.orsers = this.movieService.MovieOrders;
    });
    this.loadTotal();
  }
  pay(){
    this.paid = true;
    this.movieService.saveOrder(this.orsers).subscribe();
  }
  loadTotal() {
    this.sub = this.movieService.TotalChanged.subscribe(() => {
      this.total = this.movieService.Total;
    });
  }

}
