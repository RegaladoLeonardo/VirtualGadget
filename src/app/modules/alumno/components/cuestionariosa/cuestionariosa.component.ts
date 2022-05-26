import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuestionariosa',
  templateUrl: './cuestionariosa.component.html',
  styleUrls:  ['./cuestionariosa.component.css']
})
export class CuestionariosaComponent implements OnInit {

  private name = localStorage.getItem('id');

  url: string = 'https://si-production-7993.up.railway.app/usuario/gestioncuestionarios?idusu='+ this.name; //+ this.name;


  public linkCss: Element | null
  constructor() {
    this.linkCss = document.querySelector('#style-global');
    this.linkCss?.setAttribute('href', './assets/styles/fondo.css');
   }

  ngOnInit(): void {
  }

}
