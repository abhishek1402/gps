import { Injectable } from '@angular/core';
import { CommonService } from "./commonService";
import { Http } from "@angular/http";
@Injectable()
export class UserService extends CommonService {
  
  constructor(http:Http) {
    super(http);
  }
  postLogin(value){
    return super.postValue(value, 'users/login');
  }
  postSignup(value){
    return super.postValue(value,'users/signup');
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
  getRoles(){
    return super.getValue( `users/getAllRoles`);
  }
  getAllUsers(token){
    return super.postValue(token,'users/getAllUsers')
  }
  postImage(image){
    return super.postValue(image,'users/updateProfile');
  }
  getProfileImage(){
    return super.getValue('users/getProfileImage');
  }
  getUserData(id){
    return super.getValue(`users/getData/${id}`)
  }
}
