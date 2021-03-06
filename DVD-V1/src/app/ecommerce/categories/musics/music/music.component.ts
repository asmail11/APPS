import { Component, OnInit } from '@angular/core';
import { ProductOrder } from 'src/app/ecommerce/models/product-order.model';
import { Product } from 'src/app/ecommerce/models/product.model';
import { ProductOrders } from 'src/app/ecommerce/models/product-orders.model';
import { Subscription } from 'rxjs';
import { EcommerceService } from 'src/app/ecommerce/services/ecommerce.service';
import { MusicServiceService } from 'src/app/ecommerce/services/music-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {
    productOrders: ProductOrder[] = [];
    products: Product[] = [];
    selectedProductOrder: ProductOrder;
    private shoppingCartOrders: ProductOrders;
    sub: Subscription;
    productSelected: boolean = false;
    description: string = '';
    showMyContainerInfo: boolean = false;

    constructor(private ecommerceService: EcommerceService, private musicService: MusicServiceService,
        private router: Router) {
    }

    ngOnInit() {
        this.productOrders = [];
        this.loadProducts();
        this.loadOrders();
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

    loadProducts() {
        this.ecommerceService.getAllMusics()
            .subscribe(
                (products: any[]) => {
                    this.products = products;
                    this.products.forEach(product => {
                        this.productOrders.push(new ProductOrder(product, 0));
                    })
                },
                (error) => console.log(error)
            );
    }

    loadOrders() {
        this.sub = this.ecommerceService.OrdersChanged.subscribe(() => {
            this.shoppingCartOrders = this.ecommerceService.ProductOrders;
        });
    }

    reset() {
        this.productOrders = [];
        this.loadProducts();
        this.ecommerceService.ProductOrders.productOrders = [];
        this.loadOrders();
        this.productSelected = false;
    }
    productInfo(id: number){
       this.musicService.getMusicById(id)
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
sngleProduct(id: number) {
    this.router.navigate(['sangle/product', id]);
  }
}
