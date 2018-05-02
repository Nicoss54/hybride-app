import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {TodoService} from "../../shared/services/todo.service";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  constructor( private _nav: NavController, private _todoService: TodoService ) {}

  ngOnInit(): void {}

}
