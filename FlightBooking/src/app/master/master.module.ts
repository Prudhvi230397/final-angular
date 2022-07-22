import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { HomeComponent } from '../home/home.component';
import { MasterComponent } from '../master/master.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { RouterModule } from '@angular/router';
import { Mainroutes } from '../routing/mainroutes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { AuthguardService } from '../services/authguard.service';


@NgModule({
  declarations: [
    HomeComponent,
    MasterComponent,
    LoginComponent,
    RegisterComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(Mainroutes),
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [AuthService,AuthguardService],
  bootstrap: [MasterComponent]
})
export class MasterModule { 


  
}
