import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponentRouting } from './user.routing';
import { UserComponent } from './user.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';

import { FileSelectDirective } from "ng2-file-upload";
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { PersonaldetailsComponent } from './profile-details/personaldetails/personaldetails.component';
import { JobdetailsComponent } from './profile-details/jobdetails/jobdetails.component';
import { EducationdetailsComponent } from './profile-details/educationdetails/educationdetails.component';
import { ProfileHeaderComponent } from './header/profileHeader.component';
import { HeaderComponent } from '../../header/header.component';

@NgModule({
  imports: [
    CommonModule,UserComponentRouting,FormsModule,ReactiveFormsModule
  ],
  declarations: [UserComponent, ProfileHeaderComponent, ProfileDetailsComponent, 
    FileSelectDirective, PersonaldetailsComponent, JobdetailsComponent, EducationdetailsComponent,],
  providers:[HeaderComponent]
})
export class UserModule { }
