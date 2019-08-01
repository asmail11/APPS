import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ActicleService {
  allArticlesUrl = "thhp://localhost:8080/user/all-articles";
  articleUrl = "http://localhost:8080/user/article";

  constructor(private Http: HttpClient) { }

  getAllArticle(): Observable<any> {
    return this.Http.get(`${this.allArticlesUrl}`);
  }
}
