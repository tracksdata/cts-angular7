import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: any = []

  constructor(private ps:ProductService) { }

  ngOnInit() {
    this.products=this.ps.getAllProducts();
    console.log('---- test');
    console.dir(this.products);

  }


}
