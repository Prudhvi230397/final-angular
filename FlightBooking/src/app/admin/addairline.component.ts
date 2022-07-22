import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { airline, airlineDetails } from '../models/airline';
import { urls } from '../models/urls';

@Component({
  selector: 'app-addairline',
  templateUrl: './addairline.component.html',
 
})
export class AddAirlineComponent implements OnInit {

  AirLineModel:airline= new airline();
  AirlineDetailModels: Array<airlineDetails> = new Array<airlineDetails>();
 // urlAirline:string="https://localhost:44339/api/Airline/register";
  urlsModel:urls = new urls();

  constructor(private http:HttpClient) { }

  ngOnInit(): void {

    this.GetAirlineData();
  }

  GetAirlineData() {
    this.http.get(this.urlsModel.urlGetAirline).subscribe(res => this.GetFromServer(res), res => console.log(res));
  } 
  ResponseAlert(res: any) {
    if (res.status == 200) {
        alert(res.error.text);

    }

}
  GetFromServer(res: any) {
    console.log(res);
    this.AirlineDetailModels = res;
  }
  AddAirline()
  {
    var Airlinedetails = {
      airlineName: this.AirLineModel.airlineName,
      airlineLogo: this.AirLineModel.airlineLogo,
      contactNo: Number(this.AirLineModel.contactNo),
      address: this.AirLineModel.address,
      isBlocked: Boolean(this.AirLineModel.isBlocked)
    }
    console.log(Airlinedetails);
    console.log(this.AirLineModel);
   let urlAirline:string=this.urlsModel.urlAirline;
    this.http.post(urlAirline, Airlinedetails).subscribe(res => {this.ResponseAlert(res),this.GetAirlineData(), console.log(res) },  res => {this.ResponseAlert(res),this.GetAirlineData(),console.log(res)});
    this.AirLineModel = new airline();
  }

  hasError(typeofvalidator:string,controlname:string):Boolean{
    return this.AirLineModel.formAirlineGroup.controls[controlname].hasError(typeofvalidator);
  }

  BlockAirline(res: airlineDetails)
  {
    var Airlinedetails={
      airlineId:Number(res.airlineId),
      isBlocked:true

    }
    this.http.put(this.urlsModel.urlBlockAirline, Airlinedetails).subscribe(res => {this.GetAirlineData(), console.log(res) },  res => {this.GetAirlineData(),console.log(res)});
  }

  unBlockAirline(res: airlineDetails)
  {
    var Airlinedetails={
      airlineId:Number(res.airlineId),
      isBlocked:false

    }
    this.http.put(this.urlsModel.urlBlockAirline, Airlinedetails).subscribe(res => {this.GetAirlineData(), console.log(res) },  res => {this.GetAirlineData(),console.log(res)});
  }
}
