import { Component, ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'mfw-ui-v8';
  cursorLink = "../assets/Arrow right default state.png";
  mouseOut = "../assets/Arrow right default state.png";
  mouseOver = "../assets/Arrow right hover state.png"
}
