import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductOrders } from 'src/app/entities/ProductOrders';
import { Subscription } from 'rxjs/internal/Subscription';
import { EcommerceServiceService } from 'src/app/services/ecommerce-service.service';
import { ProductOrder } from 'src/app/entities/ProductOrder';
import { ITEMS } from 'src/app/delivery/ITEMS';
import { Item } from 'src/app/delivery/Item';
import { iterateListLike } from '@angular/core/src/change_detection/change_detection_util';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  orderFinished: boolean;
  orders: ProductOrders;
  total: number;
  sub: Subscription;

  radioSel:any;
  priceDelivery: number;
  radioSelected:string;
  radioSelectedString:string;
  itemsList: Item[] = ITEMS;
 

  @Output() onOrderFinished: EventEmitter<boolean>;

  constructor(private ecommerceService: EcommerceServiceService) {
      this.total = 0;
      this.orderFinished = false;
      this.onOrderFinished = new EventEmitter<boolean>();

      this.itemsList = ITEMS;
      this.radioSelected = "item_1";
      this.getSelecteditem();
  }

  ngOnInit() {
      this.orders = new ProductOrders();
      this.loadCart();
      this.loadTotal();

      this.itemsList.forEach(item => {
   
      this.onItemChange(item);
      console.log(item.price + "ITem price");
      });
      this.priceDelivery  = 1.99;
      console.log(this.priceDelivery + "This price");
  }

  private calculateTotal(products: ProductOrder[]): number {
      let sum = 0;
      products.forEach(value => {
          sum += (value.product.price * value.quantity);
      });
      return sum + this.priceDelivery;
  }

  ngOnDestroy() {
      this.sub.unsubscribe();
  }

  finishOrder() {
    if(confirm("Are you finish")) {
      this.orderFinished = true;
      this.ecommerceService.Total = this.total;
      this.onOrderFinished.emit(this.orderFinished);
  }}

  loadTotal() {
      this.sub = this.ecommerceService.OrdersChanged.subscribe(() => {
          this.total = this.calculateTotal(this.orders.productOrders);
      });
  }

  loadCart() {
      this.sub = this.ecommerceService.ProductOrderChanged.subscribe(() => {
          let productOrder = this.ecommerceService.SelectedProductOrder;
          if (productOrder) {
              this.orders.productOrders.push(new ProductOrder(
                  productOrder.product, productOrder.quantity));
          }
          this.ecommerceService.ProductOrders = this.orders;
          this.orders = this.ecommerceService.ProductOrders;
          this.total = this.calculateTotal(this.orders.productOrders);
          
      });
  }

  reset() {
      this.orderFinished = false;
      this.orders = new ProductOrders();
      this.orders.productOrders = []
      this.loadTotal();
      this.total = 0;
}
getSelecteditem(){
    this.radioSel = ITEMS.find(Item => Item.value === this.radioSelected);
    this.radioSelectedString = JSON.stringify(this.radioSel);
  }

  onItemChange(item: any){
    this.getSelecteditem();
    this.priceDelivery = item.price;
  }

}
