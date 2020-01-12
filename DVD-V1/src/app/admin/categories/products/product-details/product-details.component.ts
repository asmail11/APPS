import { Component, OnInit } from '@angular/core';
import { UpdateProduct } from 'src/app/ecommerce/models/updateProduct';
import { ProductServiceService } from 'src/app/ecommerce/services/product-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
product: UpdateProduct;
id: number;

  constructor(private productService: ProductServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.product = new UpdateProduct();
    this.id = this.route.snapshot.params['id'];
    this.productService.getProductById(this.id)
    .subscribe(data => {
      this.product = data;
    }, error => console.log(error));
  }
  homePage(){
    this.router.navigate(['admin']);
  }

}
