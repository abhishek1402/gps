import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from '../../../../../services/user.service';

@Component({
  selector: 'app-personaldetails',
  templateUrl: './personaldetails.component.html',
  styleUrls: ['./personaldetails.component.css']
})
export class PersonaldetailsComponent implements OnInit {
  userData:any
  updateForm:FormGroup
  disable:boolean=true
  constructor(private fb:FormBuilder,private userService:UserService) { }

  ngOnInit() {
    debugger;
    this.userService.getUserData(localStorage.getItem('id')).subscribe(res=>{this.userData=res[0];console.log(this.userData)})
    this.updateForm = this.fb.group({
      "txtName":[{value:'',disabled:true}],
      "txtMobile":[{value:'',disabled:true}],
      "txtCountry":[{value:'',disabled:true}],
      "txtState":[{value:'',disabled:true}],
      "txtCity":[{value:'',disabled:true}]
    })
  }


  change(inState){
    inState.disabled = false;
  }

  Update(){

  }

}
