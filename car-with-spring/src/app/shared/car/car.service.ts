import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({providedIn: 'root'})
export class CarService {
   public API = '//localhost:8080';
   public CAR_API = this.API + '/cars';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get(this.API + '/cool-cars');
  }
  get(id: string){
    return this.http.get(this.CAR_API + '/' + id);
  }
  save(car: any): Observable<any>{
    let res: Observable<Object>;
    if(car['href']){
      res = this.http.put(car.href, car);
    }else{
      res = this.http.post(this.CAR_API, car);
    }
    return res;
  }
  remove(href: string){
    return this.http.delete(href);
  }

}
