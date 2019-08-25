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
  
  addTodo(){
    //this.todos.push({id: 1, desc: this.desc, completed: false});
    this.todos=this.todoService.addTodo(this.desc); 
    this.desc='';
  }
}
