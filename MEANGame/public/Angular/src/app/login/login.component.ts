import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


class Credentials {
  username!: string;
  password!: string;
  constructor(username:string,password:string){
    this.username=username;
    this.password=password;
  }
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('loginForm')
  loginForm!: NgForm;
  // this is MVC
  // credentials:Credential = new Credential();

  credentials!:Credentials;
  constructor() {
    this.credentials = new Credentials("jack","202");
   }

  ngOnInit(): void {
    // this.loginForm.setValue(this.credentials);
    console.log(this.loginForm);
    // setTimeout(()=>{this.loginForm.setValue(this.credentials)},0);
    
  }
  // ngAfterContentInit(): void{
  //   this.loginForm.setValue(this.credentials);
  // }
  ngAfterViewInit():void{
    this.loginForm.setValue(this.credentials);
  }
  login(loginForm: NgForm): void {
    console.log("called", loginForm.value);
    console.log("called",this.credentials);
  }

}
