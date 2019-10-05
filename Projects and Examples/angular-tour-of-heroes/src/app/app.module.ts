import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Forms module for inputting data
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';

//Importing the heros component
import { HerosComponent } from './heros/heros.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    //Importing the heros component
    HerosComponent,
    HeroDetailComponent,
    MessagesComponent
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
