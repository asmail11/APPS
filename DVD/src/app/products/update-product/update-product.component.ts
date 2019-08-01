import { Component, OnInit } from '@angular/core';
import { AddProduct } from 'src/app/entities/AddProduct';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  id: number;
  addProductct: AddProduct = new AddProduct();
  submitted = false;

  constructor(private route: ActivatedRoute, private router: Router, 
    private productService: ProductsService) { }

  ngOnInit() {
    this.addProductct = new AddProduct();
    this.id = this.route.snapshot.params['id'];
    this.productService.getProductById(this.id)
    .subscribe(data => {
      console.log(data);
      this.addProductct = data;
    }, error => console.log(error));

    this.submitted = false;
    this.addProductct = new AddProduct
  }
  save(){
    this.productService.createProduct(this.addProductct)
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
