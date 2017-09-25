import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { routing } from "./app.routing";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorComponent } from './error/error.component';
import { UserService } from "./services/user.service";
import { CompanyService } from "./services/company.service";
import { ModalModule } from 'ngx-bootstrap';
import { NgReduxModule, NgRedux } from 'ng2-redux';
import { IAppState,rootReducer, INITIAL_STATE } from './store/reducer';
import { LoginGaurd } from './common/routegaurd/logingaurd';
@NgModule(
  {  declarations: 
    [    AppComponent, ErrorComponent,],  
imports: 
    [    BrowserModule,routing,HttpModule,BrowserAnimationsModule,ReactiveFormsModule,
      ModalModule.forRoot(),NgReduxModule
   ], 
providers: 
[UserService, CompanyService,LoginGaurd],  bootstrap: [AppComponent]})

export class AppModule {
  constructor(ngRedux:NgRedux<IAppState>){
    ngRedux.configureStore(rootReducer,INITIAL_STATE);
  }
 }