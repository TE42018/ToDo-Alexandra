import { Injectable } from '@angular/core';
import { Todo, TaskState } from '../models';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Todo[];
  nextId: number;
  state: TaskState;

  constructor() {
    this.todos = [
      { id: 0, title: 'Köpa mat', text: 'Köp mjölk, smör och majs', state: TaskState.todo },
      { id: 1, title: 'Mata Djuren', text: 'Mata katten, hunden och kossan', state: TaskState.inProgress},
    ];

    this.nextId = 2;
  }

  public addTodo(task: Todo): void {
    task.id = this.nextId;
    this.todos.push({...task});
    this.nextId++;
  }


  public getTodos(): Todo[] {
    return this.todos;
  }

  public removeTodo(id: number): void {
    this.todos = this.todos.filter((todo) => todo.id !== id);

  }
}
