import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';
import { ProductOrder } from '../models/product-order.model';
import { Product } from '../models/product.model';
import { ProductOrders } from '../models/product-orders.model';
import { Subscription } from 'rxjs';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';
import { OrdersComponent } from '../orders/orders.component';
import { EcommerceService } from '../services/ecommerce.service';
import { UpdateProduct } from '../models/updateProduct';
import { ActivatedRoute } from '@angular/router';
import { CommentComponent } from 'src/app/layout/comment/comment.component';

@Component({
  selector: 'app-sangle-product',
  templateUrl: './sangle-product.component.html',
  styleUrls: ['./sangle-product.component.scss']
})
export class SangleProductComponent implements OnInit {
  
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

  @ViewChild('commentC')
  commentC: CommentComponent;

  description: string = '';
  showMyContainerInfo: boolean = false;

  id: number;
  product: UpdateProduct;
  
  counter: number = 1;
  @Input() url = location.href;
  
  constructor(private productService: ProductServiceService, 
    private ecommerceService: EcommerceService, private route: ActivatedRoute) {
      if(!window['fbAsyncInit']){
        window['fbAsyncInit'] = function() {
          window['FB'].init({
            appId: '1347557412075590',
            autoLogAppEvents: true,
            wFbml: true,
            version: 'v3.0'
          });
        }
      }
       // load facebook sdk if required
       const url = 'https://connect.facebook.net/en_US/sdk.js';
       if (!document.querySelector(`script[src='${url}']`)) {
           let script = document.createElement('script');
           script.src = url;
           document.body.appendChild(script);
       }
     }

  ngOnInit() {
    this.productOrders = [];
    this.loadOrders();
    this.submitted = false;
    this.sangleProduct();  
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

  private sangleProduct(){
    this.product = new UpdateProduct();
    this.id = this.route.snapshot.params['id'];
    this.ecommerceService.getProductById(this.id)
    .subscribe(data => {
        this.name = data.name;
        console.log(this.name);
        this.productService.searchProduct(this.name)
        .subscribe(   (products: any[]) => {
          this.products = products;
          this.products.forEach(product => {
              this.productOrders.push(new ProductOrder(product, 0));
          });
      },
      (error) => console.log(error));
      this. submitted = true;
    });
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

ngAfterViewInit(): void {
  // render facebook button
  window['FB'] && window['FB'].XFBML.parse();
}

}
