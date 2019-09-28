import { Injectable } from '@angular/core';
import {Todo} from './todo.model';
import {v4 as UUID} from 'uuid';
import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { promise } from 'protractor';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
	private api_url='api/todos';
	private headers= {
		headers: new HttpHeaders({'Content-Type':'application/json'})
	  };
	constructor(private http: HttpClient) { }
	//todos: Todo[]=[];

	
	// POST /todos
	addTodo(todo: Todo): Observable<Todo> {
		return this.http.post<Todo>(this.api_url,todo,this.headers).pipe(
			//this.handleError)
			catchError(this.handleError<Todo>('addTodo'))
		)
	}

	//put /todo/:id
	updateTodo(todo: Todo): Observable<Todo> {
		return this.http.put(this.api_url,todo,this.headers).pipe(
			catchError(this.handleError<any>('updateTodo'))
		)
	}

	private handleError<T> (operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {
			console.error(error);
			return of(result as T);
		};
	  }
}

