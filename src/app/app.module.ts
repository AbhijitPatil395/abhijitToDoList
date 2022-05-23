import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { listComponent } from './listComponent.component';
import { toDoList } from './toDoList.component';

@NgModule({
  declarations: [
    AppComponent,listComponent,toDoList
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
