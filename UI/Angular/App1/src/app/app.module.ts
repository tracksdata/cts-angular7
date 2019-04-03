import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule(
  { // @ Decarator 
  declarations: [AppComponent],
  imports: [ BrowserModule],
  providers: [], // Dependency Injections 
  bootstrap: [AppComponent]
}
)
export class AppModule { }
