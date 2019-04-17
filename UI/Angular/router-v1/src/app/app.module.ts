import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { ListAllComponent } from './list-all/list-all.component';

const menus:Routes=[
  {path:'',component:HomeComponent},
  {path:'emp-form',component:FormComponent},
  {path:'list-all',component:ListAllComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent,
    ListAllComponent
  ],

  imports: [
    BrowserModule,
    RouterModule.forRoot(menus)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
