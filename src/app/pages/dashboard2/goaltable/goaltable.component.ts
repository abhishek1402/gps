import { style } from '@angular/animations';
import { StopwatchService } from './stopwatchservice';
import { Component, OnInit, TemplateRef, ViewChild, ElementRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';



@Component({
  selector: 'app-goaltable',
  templateUrl: './goaltable.component.html',
  styleUrls: ['./goaltable.component.css']
})
export class GoaltableComponent implements OnInit {

  value:Date;
  array:Array<number>=[]
  count:number=0;
  // minDate = new Date(2017, 5, 10);
  // maxDate = new Date(2018, 9, 15);
  // _bsValue: Date;

  // get bsValue(): Date {
  //   return this._bsValue;
  // }
 
  // set bsValue(v: Date) {
  //   console.log(v);
  //   this._bsValue = v;
  // }
  bsValue : Date;


  ngOnInit() {
    this.bsValue = new Date();
  }


    Row(){
        this.count++;
        
        this.array.push(this.count)
        
    }

}