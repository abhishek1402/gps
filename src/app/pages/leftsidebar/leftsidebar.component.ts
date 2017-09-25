import { Component, OnInit ,Output, EventEmitter, Renderer, ViewChild, ElementRef  } from '@angular/core';
import { element } from 'protractor';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-leftsidebar',
  templateUrl: './leftsidebar.component.html',
  styleUrls: ['./leftsidebar.component.css']
})
export class LeftsidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @ViewChild('patientDDL') patientDDL:ElementRef;
  @ViewChild('li') ul;
  active=false;
  isDone:boolean=true;
  isIndex:boolean=true;
  @Output('isOut') isOut=new EventEmitter();
 
  HideSidebar(){
    this.active=!this.active;  
    this.isOut.emit(this.isDone);
    this.isDone=!this.isDone;    
  }
  public isCollapsed:boolean =true;
  Collapse(e:HTMLLIElement){
    if(this.patientDDL.nativeElement.classList.contains('side1')) {
      e.classList.toggle('height');
      var fa = e.parentElement.querySelector('span i');
      fa.classList.toggle('fa-caret-down');
      fa.classList.toggle('fa-caret-left');
    }
  }
  MouseEnter(e:HTMLLIElement,index){
    if(this.patientDDL.nativeElement.classList.contains('side')) {
      e.classList.add('display');
      this.isDone=false;
      index.classList.add('z1');
    }
  }
  MouseLeave(e:HTMLLIElement,index){
    if(this.patientDDL.nativeElement.classList.contains('side')) {
      e.classList.remove('display');
      this.isDone=true;
       index.classList.remove('z1');
    }
  }

}
