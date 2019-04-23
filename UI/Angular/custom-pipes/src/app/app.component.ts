import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  characters = [
    'Finn the human',
    'Jake the dog',
    'Princess bubblegum',
    'Lumpy Space Princess',
    'Beemo1',
    'Beemo2'
  ]

  prods=[
    {id:10,name:'Pen',price:8474},
    {id:11,name:'Book',price:455545},
    {id:12,name:'Laptop',price:343434},
    {id:13,name:'Mouse',price:54677},
    {id:14,name:'Pen Drive',price:8676},

  ];

  sayMyName():string{
    return "Praveen";
  }



}
