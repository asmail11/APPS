import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { AddProduct } from 'src/app/entities/AddProduct';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: AddProduct;
  id: number;

  constructor(private route: ActivatedRoute, private router: Router, 
    private productService: ProductsService) { }

  ngOnInit() {
    this.product = new AddProduct();
    this.id = this.route.snapshot.params['id'];
    this.productService.getProductById(this.id)
    .subscribe(data => {
      console.log(data);
      this.product = data;
    }, error => console.log(error));
  }
  updateActive(isActive: boolean){
    this.productService.updateProduct(
      this.product.id,
      {
        name: this.product.name,
        price: this.product.price,
        photo: this.product.pictureUrl,
      active: isActive }
    ).subscribe(
      data => {
        console.log(data);
        this.product = data as AddProduct;
      }, error => console.log(error));
  }
  list(){
    this.router.navigate(['products']);
  }
  homePage(){
    this.router.navigate(['/']);
  }

}
