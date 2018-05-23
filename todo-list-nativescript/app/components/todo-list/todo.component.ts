import { Todo } from '~/shared/models/todo.model';
import { TodoService } from '~/shared/services/todo.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: "ns-details",
    moduleId: module.id,
    templateUrl: "./todo.component.html",
})
export class TodoComponent implements OnInit {

    todos: Todo[] = [];
    text: string;

    constructor(private _todoService: TodoService) { }

    ngOnInit() {
        this.getTodos();
    }

    /**
     * @name HomePage#getTodos
     * @type { function }
     * @description get a list of task
     */
    getTodos(): void {
        this._todoService.getTodos().subscribe(todos => this.todos = todos);
    }

    onTap(text): void {
        let todo = new Todo();
        todo.todo = text;
        this._todoService.postTodo(todo).subscribe((todo: Todo ) => {
            this.getTodos();
        })
    }
}