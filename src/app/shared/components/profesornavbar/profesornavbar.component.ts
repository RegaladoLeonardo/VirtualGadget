import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profesornavbar',
  templateUrl: './profesornavbar.component.html',
  styleUrls: ['./profesornavbar.component.css']
})
export class ProfesornavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public wrapp = (): any => document.querySelector('#wrapper')?.classList.toggle('toggled');


  public logout = (): void => {
    localStorage.clear();
  }


}
