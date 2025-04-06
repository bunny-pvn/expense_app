import { Routes } from '@angular/router';
import { AddexpenseComponent } from './addexpense/addexpense.component';
import { HomeimageComponent } from './Components/homeimage/homeimage.component';
import { LoginformComponent } from './loginform/loginform.component';
import { ViewexpenseComponent } from './viewexpense/viewexpense.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    {path:'', component:HomeimageComponent},
    {path:'AddExpense', component:AddexpenseComponent, canActivate:[authGuard]},
    {path:'login', component:LoginformComponent},
    {path:'viewexpense', component:ViewexpenseComponent, canActivate:[authGuard]}
];
