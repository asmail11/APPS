import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductOrders } from '../models/product-orders.model';
import { Subscription } from 'rxjs';
import { EcommerceService } from '../services/ecommerce.service';
import { ProductOrder } from '../models/product-order.model';
import { Item } from 'src/app/delivry/Item';
import { ITEMS } from 'src/app/delivry/ITEMS';
import { Router } from '@angular/router';

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

    constructor(private ecommerceService: EcommerceService, private router: Router) {
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
            });
            this.priceDelivery  = 1.99;
            console.log(this.priceDelivery + " This price");

       
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
        this.orderFinished = true;
        this.ecommerceService.Total = this.total;
        this.onOrderFinished.emit(this.orderFinished);
    }

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
      commentPage(){
        this.router.navigate(['comment']);
      }

}
