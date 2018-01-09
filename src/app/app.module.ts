import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListPageComponent } from './component/list-page/list-page.component';
import { AddPageComponent } from './component/add-page/add-page.component';
import {ApiService} from "./api-service.service";

import { EntriesService } from './services/entries-service.service';


@NgModule({
  declarations: [
    AppComponent,
    ListPageComponent,
    AddPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
