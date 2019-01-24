import { Injectable } from '@angular/core';
import { Todo } from '../classes/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todos: Todo[];
  private nextId: number;

  constructor() {
    this.todos = [
      new Todo(0, "Todo1"),
      new Todo(1, "Todo2")
    ];

    this.nextId = 2;
  }

  public addTodo(text: string): void {
    let todo = new Todo(this.nextId, text);
    this.todos.push(todo);
    this.nextId++;
  }


  public getTodos(): Todo[]{
    return this.todos;
  } 

  public removeTodo(id:number): void {
    this.todos = this.todos.filter((todo) => todo.id != id);

  }
}
