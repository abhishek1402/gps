import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from "./login.component";
import { LoginRouting } from "./login.routing";
import { UserService } from "../services/user.service";
import { ReactiveFormsModule } from "@angular/forms";
import { LoginGaurd } from '../common/routegaurd/logingaurd';

@NgModule({
  imports: [
    CommonModule,LoginRouting,ReactiveFormsModule
  ],
  declarations: [LoginComponent],
  providers:[UserService,LoginGaurd]
})
export class LoginModule { }
