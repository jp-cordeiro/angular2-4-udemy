import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {GiphyManualModule} from "app/giphy/giphy-manual/giphy-manual.module";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    GiphyManualModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
