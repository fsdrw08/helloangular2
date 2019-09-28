import { Component, OnInit } from '@angular/core';
import {Todo} from './todo.model';
import {TodoService} from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService]
})

export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  desc = '';
  constructor(private todoService:TodoService) { }

  ngOnInit() {
  }
  
  addTodo(desc: string): void{
    desc = desc.trim();
    if (!desc) { return };
    this.todoService.addTodo({desc} as Todo).subscribe(
      todo => {
        this.todos.push(todo);
      }
    )
  }
}
