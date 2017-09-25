import { Injectable } from '@angular/core';
import { CommonService } from "./commonService";
import { Http } from "@angular/http";
@Injectable()
export class GoalService extends CommonService {
  
  constructor(http:Http) {
    super(http);
  }
  postGoal(value){
    return super.postValue(value, 'goal');
  }
 
}
