import { ErrorComponent } from './error/error.component';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from "./app.component";
import { LoginGaurd } from './common/routegaurd/logingaurd';
const routes: Routes = [
    { path: 'pages',   loadChildren: './pages/pages.module#PagesModule',},
    { path:'',loadChildren:'./login/login.module#LoginModule',/*canActivate:[LoginGaurd]*/},
    { path: 'subscribe', loadChildren: './subscribe/subscribe.module#SubscribeModule' },    
    {path: '**', component: ErrorComponent,},
 
];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

