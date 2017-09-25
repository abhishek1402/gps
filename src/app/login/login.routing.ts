import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./login.component";
import { LoginGaurd } from '../common/routegaurd/logingaurd';

const routes: Routes = [
    { path: '',  component:LoginComponent
},
];
export const LoginRouting: ModuleWithProviders = RouterModule.forChild(routes);

