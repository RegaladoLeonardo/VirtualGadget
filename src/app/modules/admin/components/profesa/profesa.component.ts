import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profesa',
  templateUrl: './profesa.component.html',
  styleUrls: ['../../../../../assets/styles/fondo.css']
})
export class ProfesaComponent implements OnInit {

  public linkCss: Element | null;
  constructor() {
    this.linkCss = document.querySelector('#style-global');
    this.linkCss?.setAttribute('href', './assets/styles/fondo.css');
   }

  ngOnInit(): void {
  }

}
