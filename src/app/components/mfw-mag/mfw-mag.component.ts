import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-mfw-mag',
  templateUrl: './mfw-mag.component.html',
  styleUrls: ['./mfw-mag.component.scss']
})
export class MfwMagComponent implements OnInit {
  title = "Welcome to our gender-lens magazine!";
  subtitle = "Focusing on women’s human rights, health, economic and inclusive governance among others";

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  returnToHome() {
    this.router.navigateByUrl('/home');
  }
  openPDF() {
    window.open("assets/MFW Magazine June 2020.pdf");
  }

}
