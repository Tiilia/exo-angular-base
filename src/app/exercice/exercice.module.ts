import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExerciceRoutingModule } from './exercice-routing.module';
import { ExerciceComponent } from './components/exercice/exercice.component';
import { ChronoComponent } from './components/chrono/chrono.component';


@NgModule({
  declarations: [
    ExerciceComponent,
    ChronoComponent
  ],
  imports: [
    CommonModule,
    ExerciceRoutingModule,
    SharedModule
  ],
  bootstrap: [ExerciceComponent]
})
export class ExerciceModule { }
