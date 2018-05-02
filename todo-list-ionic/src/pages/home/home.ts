import {Component, OnInit} from '@angular/core';
import {IonicPage, Toast} from 'ionic-angular';
import {TodoService} from "../../shared/services/todo.service";
import {Todo} from "../../models/todo";
import {Observable} from "rxjs/Observable";
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Constant } from "../../shared/constants/app-constant";
import {ToasterService} from "../../shared/services/toaster.service";


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  private _todoObservable: Observable<Todo[]>;
  private _todoForm: FormGroup;
  public appConstant = Constant;

  constructor(private _todoService: TodoService, private _fb: FormBuilder, private _toasterService: ToasterService) {
  }

  /**
   * @name HomePage#ngOnInit
   * @type { function }
   * @description Angular lifeCycle Hook OnInit
   */
  ngOnInit(): void {
    this._todoObservable = this.getTodos();
    this.buildForm();
  }


  /**
   * @name HomePage#buildForm
   * @type { function }
   * @description build form to post a task
   */
  buildForm(): void {
    this._todoForm = this._fb.group({
      todo: ['', Validators.required]
    });
  }

  /**
   * @name HomePage#submitTodos
   * @type {function}
   * @description action call when click on submit button
   * @param {Todo} todo
   */
  submitTodos(todo: Todo): void {
    let toast: Toast;
    this._todoService.postTodo(todo).subscribe((todo: Todo ) => {
      this._todoObservable = this.getTodos();
      this._todoForm.reset();
      toast = this._toasterService.createToast(this.appConstant.todoCreatedSuccessful());
      toast.present();
    }, (error) => {
      toast = this._toasterService.createToast(this.appConstant.errorCreatedTodo());
      toast.present();
    });
  }
  /**
   * @name HomePage#getTodos
   * @type { function }
   * @description get a list of task
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

  public get todo(): AbstractControl {
    return this._todoForm.get('todo');
  }
}
