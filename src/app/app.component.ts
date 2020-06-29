import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'mfw-ui-v8';
  isMag: boolean = false;
  public onRouterOutletActivate(event: any) {
    let component = event.constructor.name;
    if (component.indexOf("Mag") != -1) {
      this.isMag = true;
    } else {
      this.isMag = false;
    }
  }

}
