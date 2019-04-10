import { Component, OnInit, ɵConsole } from '@angular/core';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
showTable=false;
product={
  id:"",
  name:"",
  price:0.0
};

prod={};
  handleForm(prod){
    this.showTable=true;
    this.prod=prod;
    console.log(prod.id+" "+prod.name+" "+prod.price);
   

  }
  constructor() {
   
   }

  ngOnInit() {
    
  
  }

}
