import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { CustomerComponent } from './customer/customer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AdminDashModule } from './admin-dash/admin-dash.module';
import { DashComponent } from './AdminDash/dash/dash.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AddCustomerComponent } from './AdminDash/add-customer/add-customer.component';
imports:[BrowserModule,FormsModule]



@NgModule({
    declarations: [
        AdminComponent,
        CustomerComponent,
        HomepageComponent,
        DashComponent,
        AddCustomerComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class LoginModule { }
