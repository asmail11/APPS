import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private baseUrl = 'http://localhost:8080/api/comments/comments';

  constructor(private http: HttpClient) { }

  getCommentById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  createComment(caomment: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/create`, caomment);
  }
  updateComment(id: number, value: any): Observable<any>{
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
  deleteComment(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
  getCommentList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  getCommentByName(name: string): Observable<any>{
    return this.http.get(`${this.baseUrl}/name/${name}`);
  }
  deleteAll(): Observable<any> {
    return this.http.delete(`${this.baseUrl}` + `/delete`, { responseType: 'text' });
  }
}
