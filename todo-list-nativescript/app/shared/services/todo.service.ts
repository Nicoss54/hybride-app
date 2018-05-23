import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Todo } from '~/shared/models/todo.model';
import { AppService } from '~/shared/services/app.service';

@Injectable()
export class TodoService {

    constructor(private _http: HttpClient, private _appService: AppService) { }

    /**
     * @name TodoService#getTodos
     * @type { function }
     * @description get the list of todos
     * @returns { Observable<Todo[]> } list of todo
     */
    getTodos(): Observable <Todo[]> {
        return result = this._http.get<Todo[]>(this._appService.baseUrlBackend + '/todos');
    }

    /**
     * @name TodoService#postTodo
     * @type {function}
     * @description post a todo
     * @param {Todo} todo
     * @returns {Observable<Todo>}
     */
    postTodo(todo: Todo): Observable <Todo> {
        return this._http.post<Todo>(this._appService.baseUrlBackend + '/todos', todo);
    }
}