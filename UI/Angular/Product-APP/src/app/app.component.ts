import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Product-APP';

  total:number;
  itemPrice:number;
  cartProducts=new Array();

  cartData(product){
    this.itemPrice=product[1];
    this.total=this.total+this.itemPrice;
    console.log("----> "+product);
    
    this.cartProducts=product;

    console.log("<----> "+this.cartProducts);

  }
}
