import { Component, OnInit } from '@angular/core';
import { Todo } from './Todo';
import { TodoServiceService } from './todo-service.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

 todos: Todo[];
 newTodo: Todo = new Todo();
 editing = false;
 editingTodo: Todo = new Todo();

 constructor(private todoService: TodoServiceService) {

 }

 ngOnInit(): void {
    this.getTodos();
 }
 getTodos(): void {
   this.todoService.getTodos().then(todos => this.todos = todos);
 }
 createTodo(todoForm: NgForm): void {
    this.todoService.createTodo(this.newTodo).then(create => {
      todoForm.reset();
      this.newTodo = new Todo();
      this.todos.unshift(create);
    });
 }
 deleteTodo(id: string): void {
   this.todoService.deleteTodo(id).then(() => {
     this.todos = this.todos.filter(todo => todo.id !== id);
   });
 }
 update(todoData: Todo, id: string): void {
   this.todoService.updateTodo(id, todoData).then(update => {
     const existingTodo = this.todos.find(todo => todo.id === update.id);
     Object.assign(existingTodo, update);
     this.clearEditing();
   });
 }
 toggleCompeleted(todoData: Todo): void {
   todoData.completed = !todoData.completed;
   this.todoService.updateTodo(todoData.id, todoData).then(update => {
     const existingData = this.todos.find(todo => todo.id === update.id);
     Object.assign(existingData, update);
   });
 }
 editTodo(todoData: Todo): void {
   this.editing = true;
   Object.assign(this.editingTodo, todoData);
 }
  clearEditing() {
    this.editingTodo = new Todo();
    this.editing = false;
  }

  toggleCompleted() {
alert("Hi")
  }

  updateTodo(editingTodo: Todo) {

  }
}
