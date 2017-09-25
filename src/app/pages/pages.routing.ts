import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from "./pages.component";
import { AuthGuard } from '../common/routegaurd/authgaurd';

const routes: Routes = [
    { path: '',  component:PagesComponent,
    children:[
      { path: 'dashboard',loadChildren: './dashboard/dashboard.module#DashboardModule',},  
      { path: 'dashboard2',loadChildren: './dashboard2/dashboard2.module#Dashboard2Module',}, 
      { path: 'access-management',loadChildren: './access-management/access-management.module#AccessManagementModule',},
      { path: 'update-profile',loadChildren: './updateprofile/updateprofile.module#UpdateprofileModule',},   
      { path: 'signup-user',loadChildren: './signup-user/signup-user.module#SignupUserModule',},
    ]
},
];
export const PagesRouting: ModuleWithProviders = RouterModule.forChild(routes);

