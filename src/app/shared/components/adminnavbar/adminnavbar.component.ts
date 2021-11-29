import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminnavbar',
  templateUrl: './adminnavbar.component.html',
  styleUrls: ['./adminnavbar.component.css']
})
export class AdminnavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public wrapp = (): any => document.querySelector('#wrapper')?.classList.toggle('toggled');


  public logout = (): void => {
    localStorage.clear();
  }


}
