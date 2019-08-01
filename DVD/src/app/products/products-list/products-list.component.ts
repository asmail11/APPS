import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/entities/Product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
    products: Observable<Product[]>;

  constructor(private productsService: ProductsService, private router: Router) { }

  ngOnInit() {
    this.relaodData();
  }
  relaodData() {
   this.products = this.productsService.getAllProducts();
  }
  deleteProduct(id: number){
    if(confirm("Are you sure to delete "+id)) {
    this.productsService.deleteProduct(id).subscribe(data =>{
       console.log(data);
       this.relaodData();
       this.router.navigate(['/']);
    }, error => console.log(error));
  }}
  productDetails(id: number) {
    this.router.navigate(['detailsProduct', id]);
  }
  createProduct(){
    this.router.navigate(['addProducts']);
  }
  updateProduct(id: number){
    this.router.navigate(['updateProduct', id]);
  }
}
