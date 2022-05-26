import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuestionariop',
  templateUrl: './cuestionariop.component.html',
  styleUrls: ['./cuestionariop.component.css']
})
export class CuestionariopComponent implements OnInit {


  private id_profe = localStorage.getItem('id_profe');

  url: string = 'https://si-production-7993.up.railway.app/profesor/gestioncuestionarios?profesor='+ this.id_profe;
  // https://cuestioonarios.herokuapp.com/profesor/gestioncuestionarios
  constructor() { }

  ngOnInit(): void {
  }

}
