import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { AppService } from "./services/app.service";
import { TodoService } from "./services/todo.service";


@NgModule({
  imports: [ HttpClientModule, ReactiveFormsModule ],
  exports: [ HttpClientModule, ReactiveFormsModule ],
  declarations: [],
  providers: [ TodoService, AppService ],
})
export class SharedModule {
}
