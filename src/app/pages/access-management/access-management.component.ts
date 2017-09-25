import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-access-management',
  templateUrl: './access-management.component.html',
  styleUrls: ['./access-management.component.css']
})
export class AccessManagementComponent implements OnInit {

  userArray:Array<object>
  userRoles:Array<object>
  constructor(private userservice:UserService){}
  ngOnInit(){
    let token = localStorage.getItem('token');
    this.userservice.getAllUsers({token:token}).subscribe(res=> {
      this.userArray = res;
    })
    this.userservice.getRoles().subscribe(res=> {
      this.userRoles =res;
    })
  }
}
