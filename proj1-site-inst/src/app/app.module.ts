import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { ContatoComponent } from './contato/contato.component';
import { NossaVisaoComponent } from './nossa-visao/nossa-visao.component';
import {ContatoModule} from "./contato/contato.module";

import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";
import {QuemSomosModule} from "./quem-somos/quem-somos.module";
import {NossaVisaoModule} from "./nossa-visao/nossa-visao.module";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    QuemSomosComponent,
    NossaVisaoComponent,
    ContatoComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,

    ContatoModule,
    QuemSomosModule,
    NossaVisaoModule,

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
