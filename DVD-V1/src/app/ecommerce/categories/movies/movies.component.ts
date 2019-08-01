import { Component, OnInit, ViewChild } from '@angular/core';
import { ShoppingCartComponent } from '../../shopping-cart/shopping-cart.component';
import { OrdersComponent } from '../../orders/orders.component';
import { MovieComponent } from './movie/movie.component';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  private collapsed = true;
  orderFinished = false;

  @ViewChild('productsC')
  productsC: MovieComponent;

  @ViewChild('shoppingCartC')
  shoppingCartC: ShoppingCartComponent;

  @ViewChild('ordersC')
  ordersC: OrdersComponent;

  constructor() {
  }

  ngOnInit() {
  }

  toggleCollapsed(): void {
      this.collapsed = !this.collapsed;
  }

  finishOrder(orderFinished: boolean) {
      this.orderFinished = orderFinished;
  }

  reset() {
      this.orderFinished = false;
      this.productsC.reset();
      this.shoppingCartC.reset();
      this.ordersC.paid = false;
  }

}
