import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { urls } from '../models/urls';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
// private _registerUrl="https://localhost:44315/api/Login/Register";
 // private _registerUrl="https://localhost:44372/api/Login/Register";
  //private _loginUrl="https://localhost:44386/api/v1.0/flight/admin/login";
 // private _loginUrl="https://localhost:44372/api/Login";
 urlModel: urls= new urls()

  constructor(private http:HttpClient, private _router:Router) { }

  loginUser(user:any)
  {
    let _loginUrl=this.urlModel._loginUrl
    return this.http.post<any>(_loginUrl,user);
  }
  regsiterUser(user:any)
  {
    let _registerUrl=this.urlModel._registerUrl
    return this.http.post<any>(_registerUrl,user);
  }
  logoutUser(){
    localStorage.removeItem('token');
    localStorage.removeItem('userRole');
    this._router.navigate(['/home']);
  }
  loggedIn(){
    return !!localStorage.getItem('token');
  }
  getToken(){
    return localStorage.getItem('token');
  }

  AdminLogin()
  {
    return !!localStorage.getItem('userRole')&& localStorage.getItem('userRole')=="Y";
  }

  UserLogin()
  {
    return !!localStorage.getItem('userRole')&& localStorage.getItem('userRole')=="N";
  }
}
