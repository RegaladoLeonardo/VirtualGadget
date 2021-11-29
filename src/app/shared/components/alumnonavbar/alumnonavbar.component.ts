import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alumnonavbar',
  templateUrl: './alumnonavbar.component.html',
  styleUrls: ['./alumnonavbar.component.css']
})
export class AlumnonavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public wrapp = (): any => document.querySelector('#wrapper')?.classList.toggle('toggled');


    public logout = (): void => {
      localStorage.clear();
    }


}
