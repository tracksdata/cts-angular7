import { Component,OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, PatternValidator} from '@angular/forms';
import { flushMicrotasks } from '@angular/core/testing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  // Step 1
  // Define Form Group element name
   empForm:FormGroup;

   constructor(private fb:FormBuilder){}

   name='James';

   get fm(){
     return this.empForm.controls;
   }
   ngOnInit(){
    
    

      this.empForm=this.fb.group(
        {
          id:['',Validators.required],
          name:['',Validators.required],
          salary:[0.0],
          password:['',Validators.required,Validators.minLength,Validators.maxLength]
        }
      )
   }

   handleForm(){
     console.log('--- submited');
     console.log(this.empForm.value);
     console.log('ID: '+this.empForm.get('id').value);
     console.log(this.empForm.valid);
     console.log(this.empForm.get('name').touched);

     console.log('-------------------------');
    
   }


    

}
