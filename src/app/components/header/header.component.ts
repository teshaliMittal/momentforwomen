import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cursorLink = "assets/Arrow right default state.png";
  mouseOut = "assets/Arrow right default state.png";
  mouseOver = "assets/Arrow right hover state.png"
  acronymLogo = "assets/Acronym logo@2x.png";
  searchForm: boolean = false;
  logoImage = "assets/Logo_MFWalliance.png";
  routerLink = "home";
  private _isMag;
  @Input()
  public get isMag() {
    return this._isMag;
  }
  public set isMag(m) {
    this._isMag = m;
    if (m) {
      this.logoImage = "...";
      this.routerLink = "media/mag";
    } else {
      this.logoImage = "assets/Logo_MFWalliance.png";
      this.routerLink = "home";
    }

  }

  constructor() { }

  ngOnInit() { }

  showForm() {
    this.searchForm = !this.searchForm;
  }

}
