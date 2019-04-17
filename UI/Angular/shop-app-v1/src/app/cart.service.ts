import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart = {}
  constructor() { }

  getItemQty(productId) {
    return this.cart[productId] ? this.cart[productId].qty : 0;
  }

  getCartSize() {
    return Object.keys(this.cart).length;
  }

  getCartLines() {
    let keys = Object.keys(this.cart);
    return keys.map(key => {
      return this.cart[key];
    })
  }

  addToCart(e) {
    let { item, qty } = e; // ==> de-structuring
    let line = this.cart[item.id];
    if (line) {
      line = { ...line, qty: line.qty + qty }
    } else {
      line = { item, qty: 1 }
    }
    this.cart = { ...this.cart, [item.id]: line }
    console.log(this.cart)
  }

}
