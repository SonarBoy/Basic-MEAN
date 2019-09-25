//Import of the decorator
import { Component } from '@angular/core';

//Parameterized componenet
@Component({
  //index.html look for app - root to install the whole app
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'THis is the start of working with angular';
}
