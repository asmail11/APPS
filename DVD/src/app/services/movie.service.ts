import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private baseUrl = 'http://localhost:8080/api/movies';

  constructor(private http: HttpClient) { }

  getMovieById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);   
  }

  createMovie(movie: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, movie);
  }
  updateMovie(id: number, value: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
  deleteMovie(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
  getAllMovies(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
