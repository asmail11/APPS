import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userUrl = 'http://localhost:8080/api/dvd/users';
  private adminUrl = 'http://localhost:8080/api/dvd/admin';
  constructor(private http: HttpClient) { }
  getUserBoard(): Observable<any> {
    return this.http.get(this.userUrl, { responseType: 'text' });
  }
  getUSerById(id: number): Observable<any> {
    return this.http.get(`${this.userUrl}/${id}`);
  }
  getUSerByUsername(username: string): Observable<any> {
    return this.http.get(`${this.userUrl}/username/${username}`);
  }
  getAdminBoard(): Observable<string> {
    return this.http.get(this.adminUrl, { responseType: 'text' });
  }
  updateUser(movie: Object): Observable<Object> {
    return this.http.post(`${this.userUrl}` + `/update`, movie);
  }
  deleteUser(id: number) {
    return this.http.delete(`${this.userUrl}/${id}`, { responseType: 'text' });
  }
}
