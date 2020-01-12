import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  private baseUrl = 'http://localhost:8080/api/products/products';
  private searchUrl = 'http://localhost:8080/api/products/search';

  constructor(private http: HttpClient) { }

  getProductById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);   
  }
  createProduct(product: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + '/create', product);
  }
  updateProduct(id: number, value: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
  getAllProducts(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  searchProduct(name: string): Observable<any>{
    return this.http.get(`${this.searchUrl}/${name}`);
  }
}
