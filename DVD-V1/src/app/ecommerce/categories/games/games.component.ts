import { Component, OnInit, ViewChild } from '@angular/core';
import { GameComponent } from './game/game.component';
import { ShoppingCartComponent } from '../../shopping-cart/shopping-cart.component';
import { OrdersComponent } from '../../orders/orders.component';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  private collapsed = true;
  orderFinished = false;

  @ViewChild('productsC')
  productsC: GameComponent

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
