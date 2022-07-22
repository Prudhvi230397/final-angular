import { AddAirlineComponent } from "../admin/addairline.component";
import { AdminComponent } from "../admin/admin.component";
import { HomeComponent } from "../home/home.component";
import { LoginComponent } from "../login/login.component";
import { RegisterComponent } from "../register/register.component";

export const Mainroutes = [
  { path: '', component: HomeComponent },
  {path:'login',component: LoginComponent},
  {path:'register',component: RegisterComponent},
  { path: 'Home', component: HomeComponent },
 // { path: 'Admin', component: AdminComponent },
//  { path: 'Admin/AddAirline', component: AddAirlineComponent },
  { path: 'Admin', loadChildren:()=>import('../admin/admin.module').then(m=>m.AdminModule) },
   { path: 'Booking', loadChildren:()=>import('../booking/booking.module').then(m=>m.BookingModule) }
];


