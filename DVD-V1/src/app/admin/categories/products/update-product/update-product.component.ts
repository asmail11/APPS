import { Component, OnInit } from '@angular/core';
import { UpdateProduct } from 'src/app/ecommerce/models/updateProduct';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServiceService } from 'src/app/ecommerce/services/product-service.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  product: UpdateProduct = new UpdateProduct();
  submitted = false;
  id: number;

  constructor(private productService: ProductServiceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.product = new UpdateProduct();
    this.id = this.route.snapshot.params['id'];
    this.productService.getProductById(this.id)
    .subscribe(data => {
      console.log(data);
      this.product = data;
    }, error => console.log(error));
    
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
