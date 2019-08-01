import { Component, OnInit } from '@angular/core';
import { ProductOrder } from 'src/app/entities/ProductOrder';
import { Product } from 'src/app/entities/Product';
import { ProductOrders } from 'src/app/entities/ProductOrders';
import { Subscription } from 'rxjs';
import { EcommerceServiceService } from 'src/app/services/ecommerce-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

    productOrders: ProductOrder[] = [];
    products: Product[] = [];
    selectedProductOrder: ProductOrder;
    private shoppingCartOrders: ProductOrders;
    sub: Subscription;
    productSelected: boolean = false;

    constructor(private ecommerceService: EcommerceServiceService) {
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
        if(confirm("Are you sure want to remove it ")) {
        let index = this.getProductIndex(productOrder.product);
        if (index > -1) {
            this.shoppingCartOrders.productOrders.splice(
                this.getProductIndex(productOrder.product), 1);
        }
        this.ecommerceService.ProductOrders = this.shoppingCartOrders;
        this.shoppingCartOrders = this.ecommerceService.ProductOrders;
        this.productSelected = false;
    
    }
}

    getProductIndex(product: Product): number {
        return this.ecommerceService.ProductOrders.productOrders.findIndex(
            value => value.product === product);
    }

    isProductSelected(product: Product): boolean {
        return this.getProductIndex(product) > -1;
    }

    loadProducts() {
        this.ecommerceService.getAllProducts()
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


}
