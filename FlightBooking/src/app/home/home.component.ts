import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
 
})
export class HomeComponent implements OnInit {

  constructor(private _auth: AuthService) { }
  userRole="";

  ngOnInit(): void {
    if(localStorage.getItem('userRole')=="Y")
    {
      this.userRole="Admin";
    }
    if(localStorage.getItem('userRole')=="N")
    {
      this.userRole="User";
    }
  }

  LogggedIn(Input: boolean): boolean {
    if (Input) {
      return this._auth.loggedIn();
    }
    else {
      return !this._auth.loggedIn();
    }

  }

}
