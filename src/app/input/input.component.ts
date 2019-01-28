import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { TaskState, Todo } from '../models';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  todo: Todo;

  states = [TaskState.todo, TaskState.inProgress, TaskState.done];

  constructor(private todoService: TodoService) {
    this.todo = {text: '', title: '', state: TaskState.todo};
  }

  ngOnInit() {
  }

  public addTodo(): void {
    this.todoService.addTodo(this.todo);
  }

}
