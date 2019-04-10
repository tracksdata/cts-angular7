import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  @Input()
  cardHeader:string;
  @Input()
  productName:string;
  @Input()
  price:number;

  cart=new Array();

  @Output()
  cartProduct=new EventEmitter();



  btnStatus=true;

  calculateTotal(){
    this.cart.push(this.productName);
    this.cart.push(this.price);
    this.btnStatus=false;
    this.cartProduct.emit(this.cart);
  }

  ngOnInit() {
  }

}
