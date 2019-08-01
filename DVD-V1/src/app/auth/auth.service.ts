import { Injectable } from '@angular/core';
import {HttpHeaders, HttpClient} from '@angular/common/http';
import { AuthLoginInfo } from './login-info';
import { Observable } from 'rxjs';
import { JwtResponse } from './jwt-response';
import { SignUpInfo } from './sigup-info';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'http://localhost:8080/api/dvd/signin';
  private signupUrl = 'http://localhost:8080/api/dvd/signup';

  constructor(private http: HttpClient) { }

  attemptAuth(creadentials: AuthLoginInfo): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.loginUrl, creadentials, httpOptions);
  }

  signUp(info: SignUpInfo): Observable<string> {
    return this.http.post<string>(this.signupUrl, info, httpOptions);
  }

  
}
