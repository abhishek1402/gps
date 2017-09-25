import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobdetails',
  templateUrl: './jobdetails.component.html',
  styleUrls: ['./jobdetails.component.css']
})
export class JobdetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  change(inState){
    inState.disabled = false;
  }

  Update(Name,Designation,Status,Joining,Contract,Location,Salary,Mentor){
    Name.disabled = true;
    Designation.disabled= true;
    Status.disabled = true;
    Joining.disabled = true;
    Contract.disabled = true;
    Location.disabled = true;
    Salary.disabled = true;
    Mentor.disabled = true;
  }

}
