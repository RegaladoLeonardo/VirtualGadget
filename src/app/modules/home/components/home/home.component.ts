import { AfterViewInit, Component, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit {

  public linkCss: Element | null;

  constructor() {
    this.linkCss = document.querySelector('#style-global');
    this.linkCss?.setAttribute('href', './assets/styles/home.css');
    console.log('Soy el constructor');
  }

  ngOnChanges(): void {
    console.log('Soy el onchanges');
  }

  ngOnInit(): void {
    console.log('Soy el oninit');
  }

  ngAfterViewInit(): void {
    console.log('Soy el afterviewinit');
  }

  ngOnDestroy(): void {
    this.linkCss?.setAttribute('href', './assets/styles/default.css');
    console.log('Soy el ondestroy');
  }

}
