import { Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  // @ViewChild('adminlogin',{read:TemplateRef})
  // adminlogin!:TemplateRef<any>;
    
  // @ViewChild('customerlogin',{read:TemplateRef})
  // customerlogin!:TemplateRef<any>;
    
  // constructor(private viewContainerRef: ViewContainerRef){}
  // onAdmin(){
  // this.viewContainerRef.clear();
  // this.viewContainerRef.createEmbeddedView(this.adminlogin);
  // }
  // onCustomer(){
  //   this.viewContainerRef.clear();
  //   this.viewContainerRef.createEmbeddedView(this.customerlogin);
  //   }
    constructor(private router: Router){}
  onAdmin()
  {
    this.router.navigate(['/adminlogin']);
  }
  onCustomer()
  {
    this.router.navigate(['/customerlogin']);

  }
}

