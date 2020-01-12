import { Component, OnInit } from '@angular/core';
import { UpdateProduct } from 'src/app/ecommerce/models/updateProduct';
import { ProductServiceService } from 'src/app/ecommerce/services/product-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  product: UpdateProduct = new UpdateProduct();
  submitted = false;

  constructor(private productService: ProductServiceService, private router: Router) { }

  ngOnInit() {
  }
  newProduct(){
    this.submitted = false;
    this.product = new UpdateProduct;
  }
  save(){
    this.productService.createProduct(this.product)
    .subscribe(data => console.log(data), error => console.log(error));
    this.product = new UpdateProduct;
    console.log(this.product);
  }
  onSubmit(){
    this.submitted = true;
    this.save();
  }
  homePage(){
    this.router.navigate(['admin']);
  }
 
}
