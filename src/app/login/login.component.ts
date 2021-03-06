import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { UserService } from "../services/user.service";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NotFoundError } from "../common/error/notfound";
import { Router } from '@angular/router';
import * as _ from "lodash";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private userservice:UserService,private fb:FormBuilder,private router:Router,private rd:Renderer2) {}

  ngOnInit() {    
    
    this.loginForm = this.fb.group(
      {
        "txtEmail":['',Validators.required],
        "password":['',Validators.required]
      }
    )

  }

  public active:boolean = true;
  ShowPass(){
    this.active=!this.active;
   
  }
  
  get txtEmail(){
    
    return this.loginForm.get('txtEmail')
  }

  get password(){
    return this.loginForm.get('password')
  }
  submit(form:FormGroup){
    this.userservice.postLogin(form)
    .subscribe(
        (res)=>{
        let token = res.token;
        localStorage.setItem('token', token );
        localStorage.setItem('roleid', res.role);
        localStorage.setItem('name',res.name);
        localStorage.setItem('id',res.id);
        this.router.navigate(['pages/dashboard']);
      },
      
        ((err:Error)=>{

        if(err instanceof NotFoundError){
          this.loginForm.setErrors({"notauser":true})
          
        }
      })
    )
  }
}
