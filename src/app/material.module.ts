import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSliderModule } from '@angular/material/slider';
import { MatStepperModule } from '@angular/material/stepper';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSliderModule,
    MatStepperModule
  ],
  exports: [
    CommonModule,
    MatFormFieldModule,
    MatSliderModule,
    MatStepperModule
  ]
})
export class MaterialModule { }
