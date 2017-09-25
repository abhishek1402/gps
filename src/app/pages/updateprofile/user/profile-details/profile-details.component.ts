import { Component, OnInit, ElementRef } from '@angular/core';
import { UserService } from '../../../../services/user.service';
import {  FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../../header/header.component';
import { ImageService } from '../../../../services/image.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { NgRedux } from 'ng2-redux';
import { IAppState } from '../../../../store/reducer';

const URL = 'http://localhost:4000/users/updateProfile';
@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit {

    personalHide:boolean=true;
    jobHide:boolean=true;
    educationHide:boolean=true;
    imagePath:string;
    fileName:string;
  constructor(private userService:UserService, private el: ElementRef,private router:Router,
    private imageService:ImageService,private ngRedux:NgRedux<IAppState>) {
       
        }

   public uploader:FileUploader = new FileUploader({url: URL,authToken:localStorage.getItem('token'), itemAlias: 'avatar'});

  ngOnInit() {
    //override the onAfterAddingfile property of the uploader so it doesn't authenticate with //credentials.
    this.uploader.onAfterAddingFile = (file)=> { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
        console.log("ImageUpload:uploaded:", item, status, response);
        this.userService.getProfileImage().subscribe
            (res=>{this.imagePath = res[0].image;
                 this.imageService.broadcastTextChange(res[0].image)
                })
     };
     this.userService.getProfileImage().subscribe(res=>{this.imagePath = res[0].image;})
     this.ngRedux
     .select(state => state) // select the entire state
     .subscribe(state => {
       // called when something has changed
     })
 }
  
  upload(e){
    let inputEl: HTMLInputElement = this.el.nativeElement.querySelector('#avatar');
    //get the total amount of files attached to the file input.
        let fileCount: number = inputEl.files.length;
    //create a new fromdata instance
        let formData = new FormData();
    //check if the filecount is greater than zero, to be sure a file was selected.
        if (fileCount > 0) { // a file was selected
            //append the key name 'photo' with the first file in the element
                formData.append('file', inputEl.files.item(0));
            //call the angular http method
            this.userService.postImage({formData}).subscribe(res=>console.log())
            
          }
          
       }   
    
    personal(){
        this.personalHide = true;
        this.jobHide = true;
        this.educationHide = true;
    }
    job(){
        this.personalHide = false;
        this.jobHide = false;
        this.educationHide = true;
    } 
    education(){
        this.personalHide = false;
        this.jobHide = true;
        this.educationHide = false;
    } 
}
