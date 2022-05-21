import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bibliotecas',
  templateUrl: './bibliotecas.component.html',
  styleUrls: ['./bibliotecas.component.css']
})
export class BibliotecasComponent implements OnInit {

  url: string = 'https://cool-tarsier-4c2e3a.netlify.app';

  //
  public linkCss: Element | null;
  constructor() {
    this.linkCss = document.querySelector('#style-global');
    this.linkCss?.setAttribute('href', './assets/styles/fondo.css');
  }

  ngOnInit(): void {
  }

}
