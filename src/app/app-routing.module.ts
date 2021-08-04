import { AppComponent } from './app.component';

import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoModule } from './demo/demo.module';
import { ExerciceModule } from './exercice/exercice.module';

const routes: Routes = [
  {
    path: "demo", loadChildren:
      () => import('./demo/demo.module').then(m => DemoModule)
  },
  {
    path: "exercice", loadChildren:
      () => import('./exercice/exercice.module').then(m => ExerciceModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
