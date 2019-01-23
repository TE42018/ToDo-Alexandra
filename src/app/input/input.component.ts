import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  private todoText: string;

  constructor(private todoService: TodoService) { 
    this.todoText = '';
  }

  ngOnInit() {
  }

  private addTodo(): void {
    this.todoService.addTodo(this.todoText);
    this.todoText = '';
  }

}
