import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.scss']
})
export class CartViewComponent implements OnInit {

  @Input() cart;
  cartLines = [];

  constructor() { }

  ngOnInit() {
  }
  ngDoCheck() {
    let keys = Object.keys(this.cart);
    keys.forEach(key => {
      let line = this.cart[key];
      this.cartLines.push(line);
    })
  }

} 
