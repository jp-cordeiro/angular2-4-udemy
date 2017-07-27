import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {GiphyManualModule} from "app/giphy/giphy-manual/giphy-manual.module";

import {HttpModule} from "@angular/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    GiphyManualModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
