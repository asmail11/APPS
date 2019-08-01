import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userUrl = 'http://localhost:8080/api/auth/user';
  private pmUrl = 'http://localhost:8080//api/auth/pm';
  private adminUrl = 'http://localhost:8080/api/auth/admin';

  constructor(private http: HttpClient) { }

  getUserBoard(): Observable<string> {
    return this.http.get(this.userUrl, {responseType: 'text'});
  }
  getPmBoard(): Observable<string> {
    return this.http.get(this.pmUrl, {responseType: 'text'});
  }
  getAdminBoard(): Observable<string> {
    return this.http.get(this.adminUrl, {responseType: 'text'});
  }
}
