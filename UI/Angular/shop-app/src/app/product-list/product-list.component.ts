import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Input() cart;
  @Output() buy = new EventEmitter();

  products = [
    {
      id: 111,
      name: 'Laptop',
      price: 198000,
      discount: 10000,
      curencyCode: 'INR',
      canBuy: true,
      makeDate: Date.now(),
      image: 'assets/Laptop.png',
      description: 'New Mac pro'
    },
    {
      id: 222,
      name: 'Mobile',
      price: 18000,
      curencyCode: 'INR',
      canBuy: true,
      makeDate: Date.now(),
      image: 'assets/Mobile.png',
      description: 'New  pro'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

  handleBuy(e) {
    this.buy.emit(e)
  }

}
