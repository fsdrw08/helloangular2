import { Injectable } from '@angular/core';
import {Todo} from './todo.model';
import {v4 as UUID} from 'uuid';
import 'rxjs/add/operator/toPromise';
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

	//todos: Todo[]=[];

	constructor(private http: HttpClient) { }
	
	addTodo(desc:string): Promise<Todo> {
	  let todo:Todo={
	    id : UUID(),
	    desc: desc, 
	    completed: false 
	  }; 

		return this.http
			.post(this.api_url, JSON.stringify(todo), {headers: this.headers})
			.toPromise
			.then(res => res.json().data as Todo)
			.catch(this.handleError);
	}
	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); 
		return Promise.reject(error.message || error);
	  }
}

