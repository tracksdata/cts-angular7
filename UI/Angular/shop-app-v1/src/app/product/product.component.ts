import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../cart.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() 
  product;

  cartQty = 0;
  currentTab = 1;
  reviews: any = []

  // dependency injection
  constructor(private cartService: CartService, private productService: ProductService) { }

  ngOnInit() {
  }


  ngDoCheck() {
    this.cartQty = this.cartService.getItemQty(this.product.id)
  }
  changeTab(tabIndex, event) {
    event.preventDefault();
    this.currentTab = tabIndex;
    if (this.currentTab === 3) {
      this.productService.getAllReviews(this.product.id)
        .then(reviews => {
          this.reviews = reviews;
        })
    }
  }
  isTabSelected(tabIndex) {
    return this.currentTab === tabIndex;
  }
  handleBuy(e) {
    this.cartService.addToCart({ item: this.product, qty: 1 })
  }

}
