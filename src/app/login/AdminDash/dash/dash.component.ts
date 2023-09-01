import { Component } from '@angular/core';
import { Router, RouterModule, Routes} from '@angular/router';
@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent {
  constructor(private router:Router ){}
onAddCust(){
 
    this.router.navigate(['/addCust']);
  
}
}
