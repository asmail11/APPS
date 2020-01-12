import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/ecommerce/models/product.model';
import { ProductServiceService } from 'src/app/ecommerce/services/product-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Observable<Product[]>;

  constructor(private productService: ProductServiceService, private router: Router) { }

  ngOnInit() {
    this.reloadData(); 
  }

  deleteProduct(id: number){
    if(confirm("Are you sure to delete it "+id)){
      this.productService.deleteProduct(id).subscribe(
        data => {
          console.log(data);
          this.reloadData();
          this.router.navigate(['/admin']);
        }, error => console.log(error));
    }
  }
  reloadData() {  
    this.products = this.productService.getAllProducts();
  }
  productDetails(id: number){
    this.router.navigate(['detailsProduct', id]);
  }
  createProduct(){
    this.router.navigate(['addProduct']);
  }
  updateProduct(id: number){
    this.router.navigate(['updateProduct', id]);
  }


}
