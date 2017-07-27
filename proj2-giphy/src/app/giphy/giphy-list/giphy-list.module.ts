import { NgModule } from '@angular/core';
import {GiphyListComponent} from "./giphy-list.component";
import {ShareModule} from "../../share/share.module";

@NgModule({
  imports: [ShareModule],
  exports:[
      GiphyListComponent
  ],
  declarations: [GiphyListComponent]
})
export class GiphyListModule { }
