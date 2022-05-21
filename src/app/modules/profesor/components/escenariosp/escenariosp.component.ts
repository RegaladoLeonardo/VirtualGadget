import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-escenariosp',
  templateUrl: './escenariosp.component.html',
  styleUrls: ['../../../../../assets/styles/fondo.css']
})
export class EscenariospComponent implements OnInit {

  private id_profe = localStorage.getItem('id_profe');

  url: string = 'https://esc-vg.herokuapp.com/getEscenarioListPr?id_profe='+ this.id_profe;

  public linkCss: Element | null;
  constructor() {
    this.linkCss = document.querySelector('#style-global');
    this.linkCss?.setAttribute('href', './assets/styles/fondo.css');
  }

  ngOnInit(): void {
  }

}
