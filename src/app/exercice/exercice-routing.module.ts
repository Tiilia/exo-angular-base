import { ChronoComponent } from './components/chrono/chrono.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExerciceComponent } from './components/exercice/exercice.component';

const routes: Routes = [
  {
    path: "", component: ExerciceComponent, children: [
      { path: "chrono", component: ChronoComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExerciceRoutingModule { }
