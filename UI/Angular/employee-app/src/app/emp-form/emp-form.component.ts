import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-emp-form',
  templateUrl: './emp-form.component.html',
  styleUrls: ['./emp-form.component.css']
})
export class EmpFormComponent implements OnInit {

 employees=new Array<Employee>();
  employee:Employee;
  found=false;

  @Input()
  myObject={
    isReadOnly:false,
    btnLable:null
  }

  constructor(private service:EmployeeService) { }

  handleForm(empForm:NgForm){
    // list all the records from array -> EmployeeService
   this.employees=this.service.listAll();
   // get lable name and call this lopp if the lable is update
   if(this.myObject.btnLable=="Update")
   this.employees.map((employee,index)=>{
     if(employee.id==empForm.value.id){
       this.employees[index]=empForm.value;
       this.found=true;
       this.myObject.isReadOnly=false;
       this.myObject.btnLable='Save';
       return false;
     }
   });


   if(!this.found)
    this.service.addEmployee(empForm.value);
    this.resetForm(empForm);
    this.found=false;
  }

  changeButton(){
    this.myObject.btnLable="Save";
    this.myObject.isReadOnly=false;
    this.service.empForm={
      id:null,
      name:null,
      salary:null
    }
  }
  resetForm(empForm?:NgForm){
    if(empForm!=null){
      empForm.resetForm();
      this.service.empForm={
        id:null,
        name:null,
        salary:null
      }
    }
  }

  ngOnInit() {
    this.resetForm();
  }

}
