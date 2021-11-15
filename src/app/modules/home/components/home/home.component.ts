import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  public linkCss: Element | null;

  constructor() {
    this.linkCss = document.querySelector('#style-global');
    this.linkCss?.setAttribute('href', './assets/styles/home.css');
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.linkCss?.setAttribute('href', './assets/styles/default.css')
  }

}
