import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  count=0;

  @Input()
  btnLable:string;

  @Output()
  noOfHits=new EventEmitter();


  btnCount(){
    this.count=this.count+1;
    this.noOfHits.emit();
  }
  constructor() { }

  ngOnInit() {
  }

}
