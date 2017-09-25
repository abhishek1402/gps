import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupUserComponent } from "./signup-user.component";
import { SignupUserRouting } from "./signup-user.routing";
import { UserService } from "../../services/user.service";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,SignupUserRouting,ReactiveFormsModule
  ],
  declarations: [SignupUserComponent],
  providers:[UserService]
})
export class SignupUserModule { }
