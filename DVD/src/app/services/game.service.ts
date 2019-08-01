import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private baseUrl = 'http://localhost:8080/api/games';

  constructor(private http: HttpClient) { }

  getGameById(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  createGame(game: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/create`, game);
  }
  updateGame(id: number, value: any): Observable<Object>{
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
  deleteGame(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
  getGameList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  getGameByName(name: string): Observable<any>{
    return this.http.get(`${this.baseUrl}/name/${name}`);
  }
  deleteAll(): Observable<any> {
    return this.http.delete(`${this.baseUrl}` + `/delete`, { responseType: 'text' });
  }
}
