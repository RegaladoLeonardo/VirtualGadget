import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSliderModule } from '@angular/material/slider';
import { MatStepperModule } from '@angular/material/stepper';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSliderModule,
    MatStepperModule,
    DragDropModule,
    MatSidenavModule,
    ReactiveFormsModule
    //mat-drawer-content

  ],
  exports: [
    CommonModule,
    MatFormFieldModule,
    MatSliderModule,
    MatStepperModule,
    DragDropModule,
    MatSidenavModule,
    ReactiveFormsModule
  ]
})
export class MaterialModule { }
