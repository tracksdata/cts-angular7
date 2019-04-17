import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsReviewComponent } from './products-review/products-review.component';

const menus:Routes=[
  {path:'',component:DashBoardComponent},
  {path:'product-form',component:ProductFormComponent},
  {path:'product-list',component:ProductsListComponent},
  {path:'product-review',component:ProductsReviewComponent},


];
@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent,
    ProductFormComponent,
    ProductsListComponent,
    ProductsReviewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(menus)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
