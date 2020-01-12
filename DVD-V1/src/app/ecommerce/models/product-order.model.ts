import { Product } from './product.model';

export class ProductOrder {
    product: Product;
    quantity: number = 1;

    constructor(product: Product, quantity: number){
        this.product = product;
        this.quantity = quantity = 1;
    }
}