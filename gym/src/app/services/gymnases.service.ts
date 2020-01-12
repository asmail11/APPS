import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gymnases } from '../model/gymnases';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GymnasesService {

  private baseUrl = environment.url;
  constructor(private http: HttpClient) { }

  getAllGymnases(): Observable<Gymnases[]> {
    return this.http.get<Gymnases[]>(`${this.baseUrl}/getAllGymnases`);
  }
  getByIdGymnase(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/findById=${id}`);
  }
  searchByName(name: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/findByName=${name}`);
  }
  searchByVille(ville: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/findByVille=${ville}`);
  }
  searchBySurface(surface: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/findBySurface=${surface}`);
  }
  searchBySeanceDay(day: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/findByJour=${day}`);
  }
  searchBySeanceHoraire(hour: number): Observable<any> {
    return this.http.get(`http://localhost:8080/api/gym/findByHoraire=${hour}`);
  }
  searchBySeanceLibellbe(libelle: string): Observable<any> {
    return this.http.get(`http://localhost:8080/api/gym/findByLibelle=${libelle}`);
  }
}
