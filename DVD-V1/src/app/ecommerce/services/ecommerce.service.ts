import { Injectable } from '@angular/core';
import { ProductOrder } from '../models/product-order.model';
import { ProductOrders } from '../models/product-orders.model';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EcommerceService {
    private productsUrl = "http://localhost:8080/api/products/products";
    private moviesUrl = "http://localhost:8080/api/movies/movies";
    private musicsUrl = "http://localhost:8080/api/musics/musics";
    private gamesUrl = "http://localhost:8080/api/games/games";
    private ordersUrl = "/api/orders";
  
    private productOrder: ProductOrder;
    private orders: ProductOrders = new ProductOrders();
  
    private productOrderSubject = new Subject();
    private ordersSubject = new Subject();
    private totalSubject = new Subject();
  
    private total: number;
  
    ProductOrderChanged = this.productOrderSubject.asObservable();
    OrdersChanged = this.ordersSubject.asObservable();
    TotalChanged = this.totalSubject.asObservable();
  
    constructor(private http: HttpClient) {
    }
    getProductById(id: number): Observable<any> {
        return this.http.get(`${this.productsUrl}/${id}`);   
      }
    getAllProducts() {
      return this.http.get(`${this.productsUrl}`);
    }
    getAllMovies(){
        return this.http.get(`${this.moviesUrl}`); 
    }
    getAllMusics(){
        return this.http.get(`${this.musicsUrl}`);  
    }
    getAllGames(){
        return this.http.get(`${this.gamesUrl}`);  
    }
    saveOrder(order: ProductOrders) {
        return this.http.post(this.ordersUrl, order);
    }
  
    set SelectedProductOrder(value: ProductOrder) {
        this.productOrder = value;
        this.productOrderSubject.next();
    }
  
    get SelectedProductOrder() {
        return this.productOrder;
    }
  
    set ProductOrders(value: ProductOrders) {
        this.orders = value;
        this.ordersSubject.next();
    }
  
    get ProductOrders() {
        return this.orders;
    }
  
    get Total() {
        return this.total;
    }
  
    set Total(value: number) {
        this.total = value;
        this.totalSubject.next();
  }
  
}
