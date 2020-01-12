import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Restaurant} from '../model/Restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  private baseUrl = environment.url;

  constructor(private http: HttpClient) { }

  findAllRestaurants(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(`${this.baseUrl}/findAllRestaurants`);
  }

  findRestaurantById(id: string): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(`${this.baseUrl}/findRestaurantById=${id}`);
  }

  findRestaurantByBorough(borough: string): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(`${this.baseUrl}/findAllRestaurants/borough=${borough}`);
  }
  findRestaurantByCuisine(cuisine: string): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(`${this.baseUrl}/findAllRestaurants/cuisine=${cuisine}`);
  }

  findRestaurantByBurgerKing(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(`${this.baseUrl}/findAllRestaurants/Burger-king`);
  }
  findRestaurantByNewYork(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(`${this.baseUrl}/findAllRestaurants/zipcode`);
  }
  findRestaurantByName(name: string): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(`${this.baseUrl}/findAllRestaurants/name=${name}`);
  }
  findRestaurantByPizza(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(`${this.baseUrl}/findAllRestaurants/pizza`);
  }
}
