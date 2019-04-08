import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  childMessage:string;
  parentMessage:string;
  greet(){
  this.childMessage="Good Afternoon";
  }

  greetings(msg){
    this.parentMessage=msg;
  }

}
