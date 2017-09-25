import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessManagementComponent } from './access-management.component';
import { AccessManagementRouting } from './access-management.routing';
import { UserService } from '../../services/user.service';
@NgModule({
  imports: [
    CommonModule,AccessManagementRouting
  ],
  declarations: [ AccessManagementComponent ]
})
export class AccessManagementModule { 
  
}
