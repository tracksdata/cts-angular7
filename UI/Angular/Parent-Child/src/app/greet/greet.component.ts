import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.css']
})
export class GreetComponent implements OnInit {


  @Input()
  cityName:string;

  @Input()
  adminName:string;

  constructor() { }

  ngOnInit() {
  }

}
