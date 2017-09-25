import { PasswordValidator } from './passwordvalidator';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { UserService } from "../../services/user.service";
import { NotFoundError } from "../../common/error/notfound";
import { AppError } from "../../common/error/apperror";

@Component({
  selector: 'app-signup-user',
  templateUrl: './signup-user.component.html',
  styleUrls: ['./signup-user.component.css']
})
export class SignupUserComponent implements OnInit {
  

  usersignupform: FormGroup;
  countryArray:Array<Object>;
  stateArray:Array<Object>;
  cityArray:Array<Object>;
  roleArray: Array<Object>;
  
  constructor(private fb: FormBuilder,private userservice:UserService) { 
   
  }

  ngOnInit() {
    this.usersignupform = this.fb.group({
      txtFirstName : ['',Validators.required],
      txtLastName : ['',Validators.required],
      txtEmail : ['',Validators.email],
      password : ['',Validators.minLength(8)],
      confirmpassword : ['',Validators.minLength(8)],
      txtMobile : ['',Validators.min(1000000000)],
      txtCountry : ['',Validators.required],
      txtState : ['',Validators.required],
      txtCity : ['',Validators.required],
      txtZipcode : ['',Validators.required],
      txtNationality : [],
      txtAddress1 : [],
      txtAddress2 : [],
      txtRole:[]
    }, {
      validator : PasswordValidator.ValidPassword
    });
    this.userservice.getCountry()
    .subscribe((res)=>{
      this.countryArray = res

    })
    this.userservice.getRoles()
    .subscribe((res)=>{
      this.roleArray = res;
    })
  }

  get firstname()  {
    return this.usersignupform.controls.txtFirstName
  }
  get lastname()  {
    return this.usersignupform.controls.txtLastName
  }
  get email()  {
    return this.usersignupform.controls.txtEmail
  }
  get password()  {
    return this.usersignupform.controls.password
  }
  get confirmpassword()  {
    return this.usersignupform.controls.confirmpassword
  }
  get mobile()  {
    return this.usersignupform.controls.txtMobile
  }
  get country()  {
    return this.usersignupform.controls.txtCountry
  }
  get state()  {
    return this.usersignupform.controls.txtState
  }
  get city()  {
    return this.usersignupform.controls.txtCity
  }
  get zipcode()  {
    return this.usersignupform.controls.txtZipcode
  }

  getState(e:Event){
    const value:number =  parseInt((<HTMLSelectElement>event.srcElement).value);
    this.userservice.getState(value).subscribe(res=>this.stateArray = res)
  }

  getCity(e:Event){
    const value:number =  parseInt((<HTMLSelectElement>event.srcElement).value);
    this.userservice.getCity(value).subscribe(res=>this.cityArray = res)
  }

  submit(value){
    console.log(value);
    let token = localStorage.getItem('token');
    value.token = token;
    this.userservice.postSignup(value).
    subscribe( (res)=>{
      alert("user created")
    },
        (err:AppError)=>{
          if(err instanceof NotFoundError)
            this.usersignupform.setErrors({"emailExists":true})

          console.log(this.usersignupform)
        }
      )
  }
}