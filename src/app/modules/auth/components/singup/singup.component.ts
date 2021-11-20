import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnDestroy{
  public linkCss: Element | null;

  constructor() {
    this.linkCss = document.querySelector('#style-global');
    this.linkCss?.setAttribute('href', './assets/styles/signup.css');
  }

  ngOnDestroy(): void {
    this.linkCss?.setAttribute('href', './assets/styles/default.css');
    console.log('Soy el ondestroy');
  }
}
