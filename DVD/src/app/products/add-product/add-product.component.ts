import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/entities/Product';
import { Location } from '@angular/common';
import { AddProduct } from 'src/app/entities/AddProduct';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  addProductct: AddProduct = new AddProduct();
  submitted = false;

  constructor(private router: Router, private productsService: ProductsService ) { }

  ngOnInit() {
  }

  newProduct(): void {
    this.submitted = false;
    this.addProductct = new AddProduct;
  }

  save(){
    this.productsService.createProduct(this.addProductct)
          .subscribe(data => console.log(data), error => console.log(error));
          this.addProductct = new AddProduct;
          console.log(this.addProductct);
  }
  onSubmit(){
    this.submitted = true;
    this.save();
  }
  homePage(){
    this.router.navigate(['/']);
  }

}
