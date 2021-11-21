import { Component, OnInit } from '@angular/core';

import {MatStepperModule} from '@angular/material/stepper';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent implements OnInit {

  isLinear = false;
  firstFormGroup?: FormGroup;
  secondFormGroup?: FormGroup;
  public linkCss: Element | null;

  constructor(private _formBuilder: FormBuilder) {
    this.linkCss = document.querySelector('#style-global');
    this.linkCss?.setAttribute('href', './assets/styles/home.css');

  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  }


}
