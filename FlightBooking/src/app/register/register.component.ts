import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userdata } from '../models/userData';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'

})
export class RegisterComponent implements OnInit {

  constructor(private _auth: AuthService, private _router: Router) { }
  registerModel: userdata = new userdata();

  ngOnInit(): void {
  }
  Register() {
    var details = {
      userName: this.registerModel.userName,
      password: this.registerModel.password,
    }
    this._auth.regsiterUser(details).subscribe(res => {
      localStorage.setItem('token', res.token);
      localStorage.setItem('userRole', res.userRole);
      this._router.navigate(['']);
    }, res => console.log(res));
  }
  hasError(typeofvalidator: string, controlname: string): Boolean {
    return this.registerModel.formUserGroup.controls[controlname].hasError(typeofvalidator);
  }
}
