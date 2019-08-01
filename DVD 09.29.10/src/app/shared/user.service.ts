import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import { User } from './user.model';
import 'rxjs/add/operator/map';


@Injectable()
export class UserService {
  constructor(public http: HttpClient) { }
 
  public logIn(user: User) {
 
    const headers = new HttpHeaders();
    headers.append('Accept', 'application/json')
    const base64Credential: string = btoa( user.UserName + ':' + user.Password);
    headers.append('Authorization', 'Basic ' + base64Credential);
 
   return this.http.get('http://localhost:8081' + '/account/login', {
      headers: headers}).map((resp: any) => {
        // login successful if there's a jwt token in the response
        user = resp.json().principal; // the returned user object is a principal object
        if (user) {
          // store user details  in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
      });
  }
 
  logOut() {
    // remove user from local storage to log user out
    return this.http.post('http://localhost:8081' + 'logout', {})
      .map(resp => {
        localStorage.removeItem('currentUser');
      });
 
  }

}