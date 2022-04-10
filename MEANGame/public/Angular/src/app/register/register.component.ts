import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registrationForm!:FormGroup; 
  // registrationForm!:FormGroup = new FormGroup; // no inject instead

  // constructor() { 
  //   this.registrationForm = new FormGroup({
  //     name:new FormControl(),
  //     username:new FormControl(),
  //     password:new FormControl(),
  //     repeatPassword:new FormControl(),
  //   })
  // }
  constructor(private formBuilder:FormBuilder) { 
    this.registrationForm = this.formBuilder.group({
      name:new FormControl(),
      username:new FormControl(),
      password:new FormControl(),
      repeatPassword:new FormControl(),
    })
  }


  register(registrationForm:FormGroup){
    console.log("form submitted",registrationForm.value);
    

  }


  ngOnInit(): void {
    
  }

}
