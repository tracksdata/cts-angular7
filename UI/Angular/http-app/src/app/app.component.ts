import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  students:any;
  constructor(private http:HttpClient){
  }
  
  ngOnInit() {

    this.http.get('http://localhost:9000/api/iti').subscribe((data=>this.students=data))
   
    
  }


}
