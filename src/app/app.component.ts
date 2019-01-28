import { Component } from '@angular/core';
import { TodoService } from './services/todo.service';
import { Todo } from './models';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My ToDo List';

  constructor(private todoService: TodoService) { }
}

