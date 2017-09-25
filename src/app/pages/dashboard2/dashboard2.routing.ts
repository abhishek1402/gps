import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Dashboard2Component } from "./dashboard2.component";
import { AuthGuard } from "../../common/routegaurd/authgaurd";

const routes: Routes = [
    { path: '',component:Dashboard2Component
},
];
export const Dashborad2Routing: ModuleWithProviders = RouterModule.forChild(routes);

