import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})



export class EmployeeComponent {


  empName="Praveen";
  status=true;

  cities=["Chennai","Hyderabad","Pune","Delhi","Goa"];

  imagePath="assets/images/tnj.png";

  toggleView(){
    this.status=!this.status;
  }


  hide(){
    this.status=false;
  }


  show(){
    this.status=true;
  }


}

