import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  public opened=false;

  constructor(
    private router: Router
  ){
  }

  redirectHome(){
    this.router.navigate(['home']);
  }
}
