import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentComponentRoutingModule } from './student-component-routing.module';
import { PlacementAddComponent } from './placement-add/placement-add.component';



@NgModule({
  declarations: [
  
    PlacementAddComponent
  ],
  imports: [
    CommonModule,
    StudentComponentRoutingModule
  ]
})
export class StudentComponentModule { }
