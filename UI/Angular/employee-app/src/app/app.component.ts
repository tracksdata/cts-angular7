import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  
  myObject={
    isReadOnly:false,
    btnLable:'Save'
  }
  manageProperties(myData){
    this.myObject=myData;
  }

}
