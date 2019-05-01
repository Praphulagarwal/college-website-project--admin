import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StPlacementComponent } from '../Placements/st-placement/st-placement.component';
import { MatFormFieldModule, MatInputModule, MatCardModule,MatToolbarModule, MatSelectModule, MatOptionModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [ StPlacementComponent ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatSelectModule,
    MatOptionModule,
    ReactiveFormsModule
  ]
})
export class DashmoduleModule { }
