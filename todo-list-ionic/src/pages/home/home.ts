import { Component, OnInit } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { TodoService } from "../../shared/services/todo.service";
import { Todo } from "../../models/todo";
import {Observable} from "rxjs/Observable";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  private _todoObservable: Observable <Todo[]>;

  constructor( private _todoService: TodoService ) {}

  /**
   * @name HomePage#ngOnInit
   * @type { function }
   * @description Angular lifeCycle Hook Oninit
   */
  ngOnInit(): void {
    this._todoObservable = this.getTodos();
  }


  /**
   * @name HomePage#getTodos
   * @type { function }
   * @description get a list of todos
   */
  getTodos(): Observable <Todo[]> {
    return this._todoService.getTodos();
  }

  /**
   * @name HomePage#todoObservable
   * @type {getter}
   * @description Getter of private varibale _todoObservable
   * @returns {Observable<Todo[]>}
   */
  public get todoObservable(): Observable<Todo[]> {
    return this._todoObservable;
  }
}
