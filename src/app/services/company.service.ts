import { Injectable } from '@angular/core';
import { CommonService } from "./commonService";
import { Http } from "@angular/http";
@Injectable()
export class CompanyService extends CommonService {
  
  constructor(http:Http) {
    super(http);
  }
  getCountry(){
    return super.getValue('location');
  }
  getState(id){
    return super.getValue(`location/${id}`)
  }
  getCity(id){
    return super.getValue(`location/cities/${id}`)
  }
  
  signupCompany(value){
    return super.postValue(value,'company/signup');
  }
}
