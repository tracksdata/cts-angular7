import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.scss']
})
export class CartViewComponent implements OnInit {

  cartLines = [];

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  ngDoCheck() {
    this.cartLines = this.cartService.getCartLines()
  }

  manageQty(item, qty) {
    this.cartService.addToCart({ item, qty })
  }


} 
