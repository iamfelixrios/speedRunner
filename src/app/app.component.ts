import { Component } from '@angular/core';
import { appName } from './app.globals'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = appName;
}
