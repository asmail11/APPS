import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private baseUrl = environment.url;

  constructor(private http: HttpClient) { }

  findAllMovies(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/findAllMovies`);
  }

  getMovieByDetails(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/movie/details=${id}`);
  }

  findMovieId(): Observable<any> {
    return this.http.get(`${this.baseUrl}/movie/id`);
  }
  findMovieYear(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/movie/years`);
  }
  findMovieTitle(): Observable<any> {
    return this.http.get(`${this.baseUrl}/movie/title`);
  }
  findMovieDirectorID(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/movie/directoryId`);
  }
  findMovieActorsId(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/movie/actor/id`);
  }
  findMovieSearch(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/movie/search`);
  }
  findMovieBetweenYear(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/movie/between/year`);
  }
}
