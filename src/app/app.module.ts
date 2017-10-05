import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AosToken, aos } from './aos';
import { AppComponent } from './app.component';
import { ParticlesModule } from 'angular-particle';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ParticlesModule
  ],
  providers: [
    { provide: AosToken, useValue: aos }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
