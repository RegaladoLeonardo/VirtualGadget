import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-navbar-a',
  templateUrl: './navbar-a.component.html',
  styleUrls: ['../../../../../assets/styles/tutorial.css']
})
export class NavbarAComponent implements OnDestroy {

  isLinear = false;
  firstFormGroup?: FormGroup;
  secondFormGroup?: FormGroup;
  public linkCss: Element | null;
  event: any;
  items = ['Carrots', 'Tomatoes'];

  basket = ['Oranges'];

  constructor() {
    this.linkCss = document.querySelector('#style-global');
    this.linkCss?.setAttribute('href', '../../../../../assets/styles/tutorial.css');
  }

  //con razon jajajaa
  ngOnDestroy(): void {

  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  public wrapp = (): any => document.querySelector('#wrapper')?.classList.toggle('toggled');

  public logout = (): void => {
}


}
