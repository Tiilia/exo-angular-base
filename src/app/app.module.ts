import { ExerciceModule } from './exercice/exercice.module';
import { DemoModule } from './demo/demo.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DemoModule,
    ExerciceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
