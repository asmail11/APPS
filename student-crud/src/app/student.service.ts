import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from './Student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseUrl = 'http://localhost:8081/api/student/'

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(`${this.baseUrl}`+`findAll`);
  }
  create(student: Student): Observable<Student> {
    return this.http.post<Student>(`${this.baseUrl}`+'save', student);
  }
  delete(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}delete/${id}`);
  }
  update(id: number, value: any): Observable<object> {
     return this.http.post(`${this.baseUrl}update/${id}`, value);
  }
}
