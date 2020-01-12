import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Todo } from './Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
  private baseUrl = 'http://localhost:8080/api';

  constructor(private http: Http) { }

  getTodos(): Promise<Todo[]> {
    return this.http.get(this.baseUrl + '/todos')
      .toPromise()
      .then(response => response.json() as Todo[])
      .catch(this.handleError);
  }

  createTodo(todoData: Todo): Promise<Todo> {
    return this.http.post(this.baseUrl + 'create', todoData)
      .toPromise().then(response => response.json() as Todo)
      .catch(this.handleError);
  }

  updateTodo(id: string, todoData: Todo): Promise<Todo> {
    return this.http.put(this.baseUrl + '/update/' + id, todoData)
      .toPromise()
      .then(response => response.json() as Todo)
      .catch(this.handleError);
  }

  deleteTodo(id: string): Promise<any> {
    return this.http.delete(this.baseUrl + '/delete' + id)
      .toPromise()
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Some error occured', error);
    return Promise.reject(error.message || error);
  }
}
