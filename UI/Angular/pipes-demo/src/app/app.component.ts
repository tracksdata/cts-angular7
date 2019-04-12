import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes-demo';

  name='praveen';

  price=25000;
  

  today=new Date();

  test(){
   // this.today.
  }
}
