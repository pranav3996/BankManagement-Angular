import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  constructor(private router:Router ){}
  username : String='user';
  password : String='pass';
 
  onDash(){
  if(this.username==='user' && this.password==='pass'){
    this.router.navigate(['/dash']);
  }
  else{
    this.router.navigate(['/adminlogin']);
    alert("username or password is invalid");
  }
    
  }
 
}
