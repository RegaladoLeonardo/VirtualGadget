import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-escenariosa',
  templateUrl: './escenariosa.component.html',
  styleUrls: ['./escenariosa.component.css']
})
export class EscenariosaComponent implements OnInit {

  public id_usuario = localStorage.getItem('id');
  url: string = 'https://escenarios-virtualgadget.herokuapp.com/getEscenarioListAl?id_usuario='+ this.id_usuario;

  public linkCss: Element | null;
  constructor() {
    console.log('Id del escenario: '+ this.id_usuario);
    this.linkCss = document.querySelector('#style-global');
    this.linkCss?.setAttribute('href', './assets/styles/fondo.css');
  }

  ngOnInit(): void {
  }

}
