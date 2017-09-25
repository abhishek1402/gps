import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isInput:boolean=false;
  show(e){
    this.isInput=e;
  }
  isSelected:boolean=true;
  side(e){
    this.isSelected=!e;
  }
}
