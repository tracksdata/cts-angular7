import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  @Input() product;
  @Input() cart;
  @Output() buy = new EventEmitter();
  cartQty = 0;
  currentTab = 1;
  reviews = [
    { stars: 5, author: 'NAG@EMAIL.COM', body: 'sample-review-1' },
    { stars: 3, author: 'INDU@EMAIL.COM', body: 'sample-review-2' }
  ]

  constructor() { }

  ngOnInit() {
  }

  
  ngDoCheck() {
    this.cartQty = this.cart[this.product.id] ? this.cart[this.product.id].qty : 0;
  }
  changeTab(tabIndex, event) {
    event.preventDefault();
    this.currentTab = tabIndex;
  }
  isTabSelected(tabIndex) {
    return this.currentTab === tabIndex;
  }
  handleBuy(e) {
    this.buy.emit({ item: this.product })
  }
}
