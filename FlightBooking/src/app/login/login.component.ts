import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userdata } from '../models/userData';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
 
})
export class LoginComponent implements OnInit {

  
  loginModel:userdata=new userdata();
  constructor(private _auth:AuthService,private _router:Router) { }

  ngOnInit(): void {
  }
  Login(){

    if(this.loginModel.userName=='' || this.loginModel.password=='')
    {
      alert("Enter UserName and Password");
    }
    var details={
      userName:this.loginModel.userName,
      password:this.loginModel.password,
     
    }
   
    this._auth.loginUser(details).subscribe(res => {
      localStorage.setItem('token', res.token);
      localStorage.setItem('userRole', res.userRole);
      this._router.navigate(['']);
     console.log(res);
    }, res => {console.log(res), this.responseAlert(res)});
    
  }

  responseAlert(res:any)
  {
    if(res.status==200)
    {
     alert(res.error.text);
     
    }
  }
  hasError(typeofvalidator:string,controlname:string):Boolean{
    return this.loginModel.formUserGroup.controls[controlname].hasError(typeofvalidator);
  }
}
