import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {

  constructor(private service:EmployeeService) { }

  employees:any;

  @Input()
  myObject={}
  @Output()
  parentData=new EventEmitter();

  populateForm(employee:Employee){
    this.myObject={
      btnLable:'Update',
      isReadOnly:true
    }

    this.service.empForm=Object.assign({},employee);
   // this.service.empForm=employee;
   this.parentData.emit(this.myObject);
  }


  ngOnInit() {
    this.employees=this.service.listAll();
  }

}
