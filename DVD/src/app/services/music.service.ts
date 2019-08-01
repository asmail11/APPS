import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  private baseUrl = 'http://localhost:8080/api/musics';

  constructor(private http: HttpClient) { }

  getMusicById(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  createMusic(music: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/create`, music);
  }
  updateMusic(id: number, value: any): Observable<Object>{
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
  deleteMusic(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
  getMusicList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  getMusicByName(name: string): Observable<any>{
    return this.http.get(`${this.baseUrl}/name/${name}`);
  }
  deleteAll(): Observable<any> {
    return this.http.delete(`${this.baseUrl}` + `/delete`, { responseType: 'text' });
  }

}
