import { Component, OnInit, ɵConsole } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
showTable=false;


  handleForm(myform:NgForm){
    
    console.log(myform.value); // JSON
    console.log(myform.status);

    if(myform.status=="INVALID"){
      console.log(' stop process or kill the process');
      
    }
    // persiast JSON object to DB using REST API
  
  }
  constructor() {
   
   }

  ngOnInit() {
    
  
  }

}
