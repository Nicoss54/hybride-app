import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";
import { HomePage } from "./home";
import { SharedModule } from "../../shared/shared.module";


@NgModule({
  imports: [ IonicPageModule.forChild(HomePage), SharedModule ],
  exports: [ HomePage ],
  declarations: [ HomePage ],
  providers: [],
})
export class HomeModule {
}
