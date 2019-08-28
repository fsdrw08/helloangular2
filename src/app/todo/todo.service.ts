import { Injectable } from '@angular/core';
import {Todo} from './todo.model';
import {v4 as UUID} from 'uuid';
//import 'rxjs/add/operator/toPromise';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { promise } from 'protractor';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
	private api_url='api/todos';
	private headers=new HttpHeaders({
		'Content-Type':'application/json'
	});
	constructor(private http: HttpClient) { }
	//todos: Todo[]=[];

	
	// POST /todos
	addTodo(desc:string): Promise<Todo> {
	  let todo = {
	    id : UUID(),
	    desc: desc, 
	    completed: false 
	  }; 

		return this.http
			.put(this.api_url, JSON.stringify(todo), {headers: this.headers})
			.toPromise() //https://stackoverflow.com/questions/40985605/property-then-does-not-exist-on-type-observable
			//.then(res => res as Todo) //https://stackoverflow.com/questions/46005430/property-json-does-not-exist-on-type-object
			.catch(this.handleError);
	}

	//put /todo/:id
	toggleTodo(todo: Todo): Promise<Todo> {
		const url = `${this.api_url}/${todo.id}`;
		console.log(url);
		let updatedTodo = Object.assign({}, todo, {completed: !todo.completed});
		return this.http
			.put(url, JSON.stringify(updatedTodo), {headers: this.headers})
			.toPromise()
			.then(()=> updatedTodo)
			.catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); 
		return Promise.reject(error.message || error);
	  }
}

