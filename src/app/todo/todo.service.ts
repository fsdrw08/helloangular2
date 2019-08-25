import { Injectable } from '@angular/core';
import {Todo} from './todo.model';
import {v4 as UUID} from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
	todos: Todo[]=[];

	 constructor() { }
	
	addTodo(todoItem:string):Todo[] {
	  let todo:Todo={
	    id : UUID(),
	    desc: todoItem, 
	    completed: false 
	  }; 
	this.todos.push(todo);
	//console.log(this.todos);
	return this.todos;
	}
}
