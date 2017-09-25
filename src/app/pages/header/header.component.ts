import { element } from 'protractor';
import { Component, OnInit, Output,EventEmitter,Input} from '@angular/core';
import { UserService } from '../../services/user.service';
import { ImageService } from '../../services/image.service';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../../store/reducer';
import { INCREMENT } from '../../store/action';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userName : any;
  imagePath :string;
  counter:Observable<number>
  constructor(private userservice:UserService,private imageService:ImageService,ngRedux:NgRedux<IAppState>) { 
    ngRedux.dispatch({type:INCREMENT})
    console.log(ngRedux.getState())
    const actionChangeFirstName = {
      type: 'USER_UPDATE_FIRSTNAME',
      newFirstName: 4
    }
    ngRedux.dispatch(actionChangeFirstName)
    console.log(ngRedux.getState())
  }


  ngOnInit() {
    
    this.userName = localStorage.name;
    this.userservice.getProfileImage().subscribe(res=>{this.imagePath = res[0].image;})
    this.imageService.space.subscribe((val) => {
      this.imagePath=val;
    });

  }

  showSidebar:boolean=true;
  @Output('isOutput') isOutput=new EventEmitter();
  showbar(){
     this.isOutput.emit(this.showSidebar);
     this.showSidebar=!this.showSidebar;
  }
  @Input('isIn') isHeader:boolean;

  logout(){
    localStorage.clear();
  }

    
}
