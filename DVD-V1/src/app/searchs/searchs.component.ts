import { Component, OnInit, ViewChild } from '@angular/core';
import { UpdateProduct } from '../ecommerce/models/updateProduct';
import { ProductServiceService } from '../ecommerce/services/product-service.service';
import { Product } from '../ecommerce/models/product.model';
import { ProductOrder } from '../ecommerce/models/product-order.model';
import { Subscription } from 'rxjs';
import { ProductOrders } from '../ecommerce/models/product-orders.model';
import { EcommerceService } from '../ecommerce/services/ecommerce.service';
import { ShoppingCartComponent } from '../ecommerce/shopping-cart/shopping-cart.component';
import { OrdersComponent } from '../ecommerce/orders/orders.component';

@Component({
  selector: 'app-searchs',
  templateUrl: './searchs.component.html',
  styleUrls: ['./searchs.component.css']
})
export class SearchsComponent implements OnInit {
  name: string;
  productOrders: ProductOrder[] = [];
  products: Product[] = [];
  selectedProductOrder: ProductOrder;
  private shoppingCartOrders: ProductOrders;
  sub: Subscription;
  productSelected: boolean = false;

  private collapsed = true;
  orderFinished = false;

  submitted = false;
  
  @ViewChild('shoppingCartC')
  shoppingCartC: ShoppingCartComponent;

  @ViewChild('ordersC')
  ordersC: OrdersComponent;

  description: string = '';
  showMyContainerInfo: boolean = false;

  constructor(private productService: ProductServiceService, 
    private ecommerceService: EcommerceService) { }

  ngOnInit() {
    this.productOrders = [];
    this.loadOrders();
    this.submitted = false;
  }

  addToCart(order: ProductOrder) {
    this.ecommerceService.SelectedProductOrder = order;
    this.selectedProductOrder = this.ecommerceService.SelectedProductOrder;
    this.productSelected = true;
}

removeFromCart(productOrder: ProductOrder) {
    let index = this.getProductIndex(productOrder.product);
    if (index > -1) {
        this.shoppingCartOrders.productOrders.splice(
            this.getProductIndex(productOrder.product), 1);
    }
    this.ecommerceService.ProductOrders = this.shoppingCartOrders;
    this.shoppingCartOrders = this.ecommerceService.ProductOrders;
    this.productSelected = false;
}

getProductIndex(product: Product): number {
    return this.ecommerceService.ProductOrders.productOrders.findIndex(
        value => value.product === product);
}

isProductSelected(product: Product): boolean {
    return this.getProductIndex(product) > -1;
}

loadOrders() {
    this.sub = this.ecommerceService.OrdersChanged.subscribe(() => {
        this.shoppingCartOrders = this.ecommerceService.ProductOrders;
    });
}

toggleCollapsed(): void {
  this.collapsed = !this.collapsed;
}

finishOrder(orderFinished: boolean) {
  this.orderFinished = orderFinished;
}

reset() {
    this.productOrders = [];
    this.ecommerceService.ProductOrders.productOrders = [];
    this.loadOrders();
    this.productSelected = false;
    this.orderFinished = false;
    this.shoppingCartC.reset();
    this.ordersC.paid = false;
}

  private searchProduct(){
    this.productService.searchProduct(this.name)
    .subscribe(   (products: any[]) => {
      this.products = products;
      this.products.forEach(product => {
          this.productOrders.push(new ProductOrder(product, 0));
      })
  },
  (error) => console.log(error));
  this. submitted = true;
  }
  onSubmit(){
    this.searchProduct();
  }
  productInfo(id: number){
    this.ecommerceService.getProductById(id)
    .subscribe(data => {
        this.description = data.description;
        console.log(this.description);
    });
    this.showMyContainerInfo = !this.showMyContainerInfo;   
 }
 showBtn=-1;

showUndoBtn(index){
this.showBtn=index;
}
}
