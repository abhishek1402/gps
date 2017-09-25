import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-educationdetails',
  templateUrl: './educationdetails.component.html',
  styleUrls: ['./educationdetails.component.css']
})
export class EducationdetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  change(inState){
    inState.disabled = false;
  }

  Update(Name,Experience,SchoolPass,SchoolGrade,CollegePass,CollegeGrade,Skills,Languages,License,Others){
    Name.disabled = true;
    Experience.disabled = true;
    SchoolPass.disabled = true;
    SchoolGrade.disabled = true;
    CollegePass.disabled = true;
    CollegeGrade.disabled = true;
    Skills.disabled = true;
    Languages.disabled = true;
    License.disabled = true;
    Others.disabled = true;
  }

}
