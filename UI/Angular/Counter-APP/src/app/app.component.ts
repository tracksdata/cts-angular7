import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 

  count=0;
  total=0;
  initialValue=0;

  test(data){
    this.initialValue=data;
  }
  totalCount(countValue){
    this.total=this.total+countValue;
    //console.log(this.count);
    //this.total=this.total+this.count;// wrong logic!
  }
}
