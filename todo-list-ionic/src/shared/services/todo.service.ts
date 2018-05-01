import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { AppService } from "./app.service";
import { Todo } from "../../models/todo";

@Injectable()
export class TodoService {

  constructor(private _http: HttpClient, private _appService: AppService) {}

  /**
   * @name TodoService#getTodos
   * @type { function }
   * @description get the list of todos
   * @returns { Observable<Todo[]> } list of todos
   */
  getTodos(): Observable <Todo[]> {
    return this._http.get<Todo[]>(`${this._appService.baseUrlBackend}/todos`);
  }
}
