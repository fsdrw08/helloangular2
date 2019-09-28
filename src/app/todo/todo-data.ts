import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Todo} from './todo.model';

export class InMemoryTodoDbService implements InMemoryDbService {
	createDb(){
	  const todos:Todo[] = [
	    {id: 1, desc: 'Getting up', completed: true}, 
	    {id: 2, desc: 'Go to school', completed: false}
	  ];
	return {todos};
	}

	genId(todos: Todo[]): number {
		return todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1:2;
	}
}
