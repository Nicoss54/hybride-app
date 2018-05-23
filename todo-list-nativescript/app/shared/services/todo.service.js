"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var app_service_1 = require("~/shared/services/app.service");
var TodoService = /** @class */ (function () {
    function TodoService(_http, _appService) {
        this._http = _http;
        this._appService = _appService;
    }
    /**
     * @name TodoService#getTodos
     * @type { function }
     * @description get the list of todos
     * @returns { Observable<Todo[]> } list of todo
     */
    TodoService.prototype.getTodos = function () {
        var result = this._http.get(this._appService.baseUrlBackend + '/todos');
        console.log('result', result);
        return result;
    };
    /**
     * @name TodoService#postTodo
     * @type {function}
     * @description post a todo
     * @param {Todo} todo
     * @returns {Observable<Todo>}
     */
    TodoService.prototype.postTodo = function (todo) {
        return this._http.post(this._appService.baseUrlBackend + '/todos', todo);
    };
    TodoService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient, app_service_1.AppService])
    ], TodoService);
    return TodoService;
}());
exports.TodoService = TodoService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kby5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidG9kby5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDZDQUFrRDtBQUdsRCw2REFBMkQ7QUFHM0Q7SUFFSSxxQkFBb0IsS0FBaUIsRUFBVSxXQUF1QjtRQUFsRCxVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQVk7SUFBSSxDQUFDO0lBRTNFOzs7OztPQUtHO0lBQ0gsOEJBQVEsR0FBUjtRQUNJLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFTLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxHQUFHLFFBQVEsQ0FBQyxDQUFDO1FBQ2xGLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzlCLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILDhCQUFRLEdBQVIsVUFBUyxJQUFVO1FBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxHQUFHLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNuRixDQUFDO0lBekJRLFdBQVc7UUFEdkIsaUJBQVUsRUFBRTt5Q0FHa0IsaUJBQVUsRUFBdUIsd0JBQVU7T0FGN0QsV0FBVyxDQTBCdkI7SUFBRCxrQkFBQztDQUFBLEFBMUJELElBMEJDO0FBMUJZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0IHsgVG9kbyB9IGZyb20gJ34vc2hhcmVkL21vZGVscy90b2RvLm1vZGVsJztcbmltcG9ydCB7IEFwcFNlcnZpY2UgfSBmcm9tICd+L3NoYXJlZC9zZXJ2aWNlcy9hcHAuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUb2RvU2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwQ2xpZW50LCBwcml2YXRlIF9hcHBTZXJ2aWNlOiBBcHBTZXJ2aWNlKSB7IH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIFRvZG9TZXJ2aWNlI2dldFRvZG9zXG4gICAgICogQHR5cGUgeyBmdW5jdGlvbiB9XG4gICAgICogQGRlc2NyaXB0aW9uIGdldCB0aGUgbGlzdCBvZiB0b2Rvc1xuICAgICAqIEByZXR1cm5zIHsgT2JzZXJ2YWJsZTxUb2RvW10+IH0gbGlzdCBvZiB0b2RvXG4gICAgICovXG4gICAgZ2V0VG9kb3MoKTogT2JzZXJ2YWJsZSA8VG9kb1tdPiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuX2h0dHAuZ2V0PFRvZG9bXT4odGhpcy5fYXBwU2VydmljZS5iYXNlVXJsQmFja2VuZCArICcvdG9kb3MnKTtcbiAgICAgICAgY29uc29sZS5sb2coJ3Jlc3VsdCcsIHJlc3VsdCk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgVG9kb1NlcnZpY2UjcG9zdFRvZG9cbiAgICAgKiBAdHlwZSB7ZnVuY3Rpb259XG4gICAgICogQGRlc2NyaXB0aW9uIHBvc3QgYSB0b2RvXG4gICAgICogQHBhcmFtIHtUb2RvfSB0b2RvXG4gICAgICogQHJldHVybnMge09ic2VydmFibGU8VG9kbz59XG4gICAgICovXG4gICAgcG9zdFRvZG8odG9kbzogVG9kbyk6IE9ic2VydmFibGUgPFRvZG8+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdDxUb2RvPih0aGlzLl9hcHBTZXJ2aWNlLmJhc2VVcmxCYWNrZW5kICsgJy90b2RvcycsIHRvZG8pO1xuICAgIH1cbn0iXX0=