import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { airlineDetails, inventory } from '../models/inventory';
import { urls } from '../models/urls';

@Component({
  selector: 'app-addinventory',
  templateUrl: './addinventory.component.html',

})
export class AddinventoryComponent implements OnInit {

  InventoryModel: inventory = new inventory();
  AirlineDetailsmodels: Array<airlineDetails> = new Array<airlineDetails>();
  urlModel:urls=new urls();

  viewDate: Date = new Date();

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.GetAirlineData();

  }

  GetAirlineData() {
    this.http.get(this.urlModel.urlGetAirlineData).subscribe(res => this.GetFromServer(res), res => console.log(res));

  }
  GetFromServer(res: any) {
    console.log(res);
    this.AirlineDetailsmodels = res;
  }
  AddInventory() {
    var Inventorydetails = {
      flightNo: this.InventoryModel.flightNo,
      airlineId: Number(this.InventoryModel.airlineId),
      boardingPlace: this.InventoryModel.boardingPlace,
      destination: this.InventoryModel.destination,
      startDateTime: (this.InventoryModel.startDateTime),
      endDateTime: this.InventoryModel.endDateTime,
      instrumentUsed: this.InventoryModel.instrumentUsed,
      scheduledDaysId: this.InventoryModel.scheduledDaysId,
      businessClassSeats: Number(this.InventoryModel.businessClassSeats),
      economySeats: Number(this.InventoryModel.economySeats),
      ticketCost: Number(this.InventoryModel.ticketCost),
      noOfRows: Number(this.InventoryModel.noOfRows),
      mealId: this.InventoryModel.mealId,
      monday: Boolean(this.InventoryModel.monday),
      tuesday: Boolean(this.InventoryModel.tuesday),
      wednesday: Boolean(this.InventoryModel.wednesday),
      thursday: Boolean(this.InventoryModel.thursday),
      friday: Boolean(this.InventoryModel.friday),
      saturday: Boolean(this.InventoryModel.saturday),
      sunday: Boolean(this.InventoryModel.sunday),
      travelstarttime: this.InventoryModel.travelstarttime,
      travelendtime: this.InventoryModel.travelendtime,

    }
    console.log(Inventorydetails);
    console.log(this.InventoryModel);

    this.http.post(this.urlModel.urlInventory, Inventorydetails).subscribe(res => {this.ResponseAlert(res), console.log(res) }, res => {this.ResponseAlert(res),console.log(res)});
    //this.InventoryModel = new inventory();
  }

  ResponseAlert(res:any)
  {
     if(res.status==200)
     {
      alert(res.error.text);
      
     }
   
  }
  hasError(typeofvalidator: string, controlname: string): Boolean {
    return this.InventoryModel.formInventoryGroup.controls[controlname].hasError(typeofvalidator);
  }

}
