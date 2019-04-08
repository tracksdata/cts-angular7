import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 

  count=0;
  total=0;
  counter(){
    this.count=this.count+1;
    //console.log(this.count);
    this.total=this.total+this.count;// wrong logic!
  }
}
