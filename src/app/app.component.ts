import { Component } from '@angular/core';
import { background } from "./views/login/login.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portal';
  constructor() { }

  alternate(bool) {
    if (bool == true) {
      document.getElementById("app").className = "light";
      document.getElementById("nav").className = "navLight";
      background(true);
    } else {
      document.getElementById("app").className = "app";
      document.getElementById("nav").className = "navDark";
      background(false);
    }

  }
}
