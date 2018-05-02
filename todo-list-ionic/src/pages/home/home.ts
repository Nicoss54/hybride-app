import {Component, OnInit} from '@angular/core';
import {IonicPage} from 'ionic-angular';
import {TodoService} from "../../shared/services/todo.service";
import {Todo} from "../../models/todo";
import {Observable} from "rxjs/Observable";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  private _todoObservable: Observable<Todo[]>;
  private _todoForm: FormGroup;

  constructor(private _todoService: TodoService, private _fb: FormBuilder) {
  }

  /**
   * @name HomePage#ngOnInit
   * @type { function }
   * @description Angular lifeCycle Hook Oninit
   */
  ngOnInit(): void {
    this._todoObservable = this.getTodos();
    this.buildForm();
  }


  /**
   * @name HomePage#buildForm
   * @type { function }
   * @description build form to post a todo
   */
  buildForm(): void {
    this._todoForm = this._fb.group({
      todo: ['', Validators.required]
    });
  }

  /**
   * @name HomePage#getTodos
   * @type { function }
   * @description get a list of todos
   */
  getTodos(): Observable<Todo[]> {
    return this._todoService.getTodos();
  }

  /**
   * @name HomePage#todoObservable
   * @type {getter}
   * @description Getter of private variable _todoObservable
   * @returns {Observable<Todo[]>}
   */
  public get todoObservable(): Observable<Todo[]> {
    return this._todoObservable;
  }

  /**
   * @name HomePage#todoForm
   * @type {getter}
   * @description Getter of private variable _todoForm
   * @returns {FormGroup}
   */
  public get todoForm(): FormGroup {
    return this._todoForm;
  }
}
