import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExerciceRoutingModule } from './exercice-routing.module';
import { ExerciceComponent } from './components/exercice/exercice.component';
import { ChronoComponent } from './components/chrono/chrono.component';
import { EquipeComponent } from './components/equipe/equipe.component';
import { ScoreComponent } from './components/score/score.component';
import { PagePrincipaleComponent } from './components/page-principale/page-principale.component';


@NgModule({
  declarations: [
    ExerciceComponent,
    ChronoComponent,
    EquipeComponent,
    ScoreComponent,
    PagePrincipaleComponent
  ],
  imports: [
    CommonModule,
    ExerciceRoutingModule,
    SharedModule
  ],
  bootstrap: [ExerciceComponent]
})
export class ExerciceModule { }
