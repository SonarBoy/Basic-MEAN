import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Forms module for inputting data
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { HerosComponent } from './heros/heros.component';

@NgModule({
  declarations: [
    AppComponent,
    HerosComponent
  ],
  imports: [
    BrowserModule,
    //Importing of forms module here
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
