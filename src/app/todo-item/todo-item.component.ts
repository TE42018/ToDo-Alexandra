import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../models';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input()
  private todo: Todo;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  public removeTodo(): void {
    this.todoService.removeTodo(this.todo.id);
  }

}
