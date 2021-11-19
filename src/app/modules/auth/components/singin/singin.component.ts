import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent implements  OnDestroy{
  public linkCss: Element | null;

  constructor() {
    this.linkCss = document.querySelector('#style-global');
    this.linkCss?.setAttribute('href', './assets/styles/barra.css');
  }

  ngOnDestroy(): void {
    this.linkCss?.setAttribute('href', './assets/styles/default.css');
    console.log('Soy el ondestroy');
  }
}
