import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSliderModule } from '@angular/material/slider';
import { MatStepperModule } from '@angular/material/stepper';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSliderModule,
    MatStepperModule,
    DragDropModule,
    MatSidenavModule
    //mat-drawer-content

  ],
  exports: [
    CommonModule,
    MatFormFieldModule,
    MatSliderModule,
    MatStepperModule,
    DragDropModule,
    MatSidenavModule
  ]
})
export class MaterialModule { }
