import { Injectable } from '@angular/core';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  empForm=new Employee();

  emps=new Array();

  addEmployee(emp:Employee){
    this.emps.push(emp);
  }

  // list all employees
  listAll(){
    return this.emps;
  }


  constructor() { }
}
