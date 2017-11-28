import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListPageComponent } from './component/list-page/list-page.component';
import { AddPageComponent } from './component/add-page/add-page.component';


@NgModule({
  declarations: [
    AppComponent,
    ListPageComponent,
    AddPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
