import { Injectable } from '@angular/core';
import { Http,Headers } from "@angular/http";
import { Url } from "../common/serverurl.class";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { NotFoundError } from "../common/error/notfound";
import { Observable } from "rxjs/Observable";
import { AppError } from "../common/error/apperror";
import { DuplicateError } from '../common/error/duplicateError';
@Injectable()
export class CommonService {

  constructor(public http:Http) {}
   postValue(value,page){
     debugger;
     let headers = new Headers();
     headers.append('Authorization',localStorage.getItem('token')); 
    return this.http.post(`${Url.url}/${page}`,value, {headers: headers})
    .map(res => res.json())
    .catch((err)=>{
        if(err.status == 404)
         return  Observable.throw(new NotFoundError()) 
        else if(err.status == 405)
          return Observable.throw(new DuplicateError())
        else 
          return Observable.throw(new AppError(err))
    })
  }

  getValue(page)
  {
    let headers = new Headers();
    headers.append('Authorization',localStorage.getItem('token')); 
    return this.http.get(`${Url.url}/${page}`, {headers: headers})
    .map(res => res.json())
    .catch((err)=>{
        if(err.status == 404)
         return  Observable.throw(new NotFoundError()) 
       
        else 
          return Observable.throw(new AppError(err))
    })
  }
}
