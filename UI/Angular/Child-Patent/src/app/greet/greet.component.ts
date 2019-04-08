import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.css']
})
export class GreetComponent implements OnInit {


  @Input()
  msg:string;

  @Output()
  parentMsg=new EventEmitter<Object>();


  greetBack(){
    this.parentMsg.emit('Good afternoon too!');
  }

  constructor() { }

  ngOnInit() {
  }

}
