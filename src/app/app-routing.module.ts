import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './login/admin/admin.component';
import { AddCustomerComponent } from './login/AdminDash/add-customer/add-customer.component';
import { DashComponent } from './login/AdminDash/dash/dash.component';
import { HomepageComponent } from './login/homepage/homepage.component';
import { CustomerComponent } from './login/customer/customer.component';

const routes: Routes = [

   {path:'',component:HomepageComponent},
   {path: 'adminlogin',component:AdminComponent},
   {path: 'customerlogin',component:CustomerComponent},
   {path: 'dash',component:DashComponent},
  {path: 'addCust',component:AddCustomerComponent},
  // {path: 'customers', component: AddCustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
