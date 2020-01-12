import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SportifService {
  private baseUrl = environment.url;
  constructor(private http: HttpClient) { }

  findAllSportifs(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/getAllSportifs`);
  }
  getSportifById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/getSportifById=${id}`);
  }
}
