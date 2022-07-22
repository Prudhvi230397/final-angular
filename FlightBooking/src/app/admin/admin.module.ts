import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { AdminComponent } from '../admin/admin.component';
import { AddAirlineComponent } from '../admin/addairline.component';
import { Adminroutes } from '../routing/adminroutes';
import { CommonModule } from '@angular/common';
import { AddinventoryComponent } from './addinventory.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { TokenInterceptorService } from '../services/token-interceptor.service';
import { DiscountComponent } from '../discount/discount.component';

@NgModule({
  declarations: [
    AdminComponent,
    AddAirlineComponent,
    AddinventoryComponent,
    DiscountComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(Adminroutes),
    HttpClientModule,
    ReactiveFormsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    })
  ],
  //providers: [AuthService],
  providers: [AuthService,{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true}],
  bootstrap: [AdminComponent]
})
export class AdminModule { }
