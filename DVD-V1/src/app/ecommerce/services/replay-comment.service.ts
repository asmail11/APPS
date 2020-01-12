import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReplayCommentService {

  private baseUrl = 'http://localhost:8080/api/replaycomments/replay';
  private baseUrlReplay = 'http://localhost:8080/api/replaycomments/comment';

  constructor(private http: HttpClient) { }

  getReplayCommentById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  createReplayComment(caomment: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/create`, caomment);
  }
  updateReplayComment(id: number, value: any): Observable<any>{
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
  deleteReplayComment(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
  getReplayCommentList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  getReplayCommentByName(name: string): Observable<any>{
    return this.http.get(`${this.baseUrl}/name/${name}`);
  }
  deleteAll(): Observable<any> {
    return this.http.delete(`${this.baseUrl}` + `/delete`, { responseType: 'text' });
  }
  getReplayCommentByCommentId(id: number): Observable<any> {
    return this.http.get(`${this.baseUrlReplay}/${id}`);
  }
}
