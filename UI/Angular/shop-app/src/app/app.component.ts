import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'online-shopping';
  isCartOpen = false;
  cartSize = 0;

  cart = {}

  addToCart(e) {

    // let item = e.item;
    // let qty = e.qty;
    // or
    let { item, qty } = e; // ==> de-structuring
    let line = this.cart[item.id];
    if (line) {
      line = { ...line, qty: line.qty + 1 }
    } else {
      line = { item, qty: 1 }
    }
    this.cart = { ...this.cart, [item.id]: line }
    this.cartSize = Object.keys(this.cart).length;
  }
  toggleCart(e) {
    e.preventDefault();
    this.isCartOpen = !this.isCartOpen;
  }

}
