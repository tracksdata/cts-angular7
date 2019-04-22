import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { myCustomValidations } from '.';

class CustomValidator{

// Validates US phone numbers
static phoneValidator(number): any {
  if (number.pristine) {
     return null;
  }
  const PHONE_REGEXP = /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/;
  number.markAsTouched();
  if (PHONE_REGEXP.test(number.value)) {
     return null;
  }
  return {
     invalidNumber: true
  };
}



  // Validates US SSN
static numberValidator(ssn): any {
  if (ssn.pristine) {
     return null;
  }
  const SSN_REGEXP = /^(?!219-09-9999|078-05-1120)(?!666|000|9\d{2})\d{3}-(?!00)\d{2}-(?!0{4})\d{4}$/;  
  ssn.markAsTouched();
  if (SSN_REGEXP.test(ssn.value)) {
     return null;
  }
  return {
     invalidSsn: true
  };
}
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  formName: FormGroup;
  submitted = false;
  names=['prabhu','praveen'];


  constructor(private fb: FormBuilder) { }
  errors:any=[];
  ngOnInit() {
    this.formName = this.fb.group({
       numberInput: ['', [CustomValidator.phoneValidator]],
       review:[null,[Validators.required,myCustomValidations]]
    });

    let reviewControl=this.formName.get('review');

    
   // let bodyControl=this.formName.get

    reviewControl.statusChanges // stream
    .subscribe(asdf=>{
       
      if(asdf==="INVALID"){
         if(reviewControl.errors.bad){
            this.errors['body']='Bad Words Not Allowed';
         }
      }else{
         this.errors['body']='';
      }
   })
 }

  get fn(){
    return this.formName.controls;
  }



 submit(){
   console.log(this.formName.value);
   
 }
  }



    
 
  

