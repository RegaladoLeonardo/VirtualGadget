import { Component, OnInit, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-navbar-a',
  templateUrl: './navbar-a.component.html',
  styleUrls: ['../../../../../assets/styles/navegacion.css']
})
export class NavbarAComponent implements OnDestroy {

  public linkCss: Element | null;
  constructor() {

    this.linkCss = document.querySelector('#style-global');
    this.linkCss?.setAttribute('href', './assets/styles/navegacion.css');
  }

  ngOnDestroy(): void {

  }




}
