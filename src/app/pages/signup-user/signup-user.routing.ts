import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupUserComponent } from "./signup-user.component";

const routes: Routes = [
    { path: '',  component:SignupUserComponent
},
];
export const SignupUserRouting: ModuleWithProviders = RouterModule.forChild(routes);

