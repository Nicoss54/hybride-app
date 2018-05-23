"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var todo_service_1 = require("~/shared/services/todo.service");
var core_1 = require("@angular/core");
var TodoComponent = /** @class */ (function () {
    function TodoComponent(_todoService) {
        this._todoService = _todoService;
        this.todos = [];
    }
    TodoComponent.prototype.ngOnInit = function () {
        this.getTodos();
    };
    /**
     * @name HomePage#getTodos
     * @type { function }
     * @description get a list of task
     */
    TodoComponent.prototype.getTodos = function () {
        var _this = this;
        this._todoService.getTodos().subscribe(function (todos) { return _this.todos = todos; });
    };
    TodoComponent = __decorate([
        core_1.Component({
            selector: "ns-details",
            moduleId: module.id,
            templateUrl: "./todo.component.html",
        }),
        __metadata("design:paramtypes", [todo_service_1.TodoService])
    ], TodoComponent);
    return TodoComponent;
}());
exports.TodoComponent = TodoComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0b2RvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLCtEQUE2RDtBQUM3RCxzQ0FBa0Q7QUFPbEQ7SUFJSSx1QkFBb0IsWUFBeUI7UUFBekIsaUJBQVksR0FBWixZQUFZLENBQWE7UUFGN0MsVUFBSyxHQUFXLEVBQUUsQ0FBQztJQUU4QixDQUFDO0lBRWxELGdDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxnQ0FBUSxHQUFSO1FBQUEsaUJBRUM7UUFERyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxFQUFsQixDQUFrQixDQUFDLENBQUM7SUFDeEUsQ0FBQztJQWpCUSxhQUFhO1FBTHpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsWUFBWTtZQUN0QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtTQUN2QyxDQUFDO3lDQUtvQywwQkFBVztPQUpwQyxhQUFhLENBa0J6QjtJQUFELG9CQUFDO0NBQUEsQUFsQkQsSUFrQkM7QUFsQlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUb2RvIH0gZnJvbSAnfi9zaGFyZWQvbW9kZWxzL3RvZG8ubW9kZWwnO1xuaW1wb3J0IHsgVG9kb1NlcnZpY2UgfSBmcm9tICd+L3NoYXJlZC9zZXJ2aWNlcy90b2RvLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtZGV0YWlsc1wiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi90b2RvLmNvbXBvbmVudC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIFRvZG9Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgdG9kb3M6IFRvZG9bXSA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfdG9kb1NlcnZpY2U6IFRvZG9TZXJ2aWNlKSB7IH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmdldFRvZG9zKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgSG9tZVBhZ2UjZ2V0VG9kb3NcbiAgICAgKiBAdHlwZSB7IGZ1bmN0aW9uIH1cbiAgICAgKiBAZGVzY3JpcHRpb24gZ2V0IGEgbGlzdCBvZiB0YXNrXG4gICAgICovXG4gICAgZ2V0VG9kb3MoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX3RvZG9TZXJ2aWNlLmdldFRvZG9zKCkuc3Vic2NyaWJlKHRvZG9zID0+IHRoaXMudG9kb3MgPSB0b2Rvcyk7XG4gICAgfVxufSJdfQ==