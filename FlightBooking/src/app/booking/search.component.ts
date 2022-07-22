import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { search } from '../models/search.model';
import { Onward, RoundTrip, SearchResults } from '../models/searchresults.model';
import { urls } from '../models/urls';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',

})
export class SearchComponent implements OnInit {

  constructor(private http: HttpClient, private _router: Router) { }
  SearchModel: search = new search();
  urlsModel: urls = new urls();
  SearchResultsModel: SearchResults = new SearchResults();
  OnwardModels: Array<Onward> = new Array<Onward>()
  RoundTripModels: Array<RoundTrip> = new Array<RoundTrip>();
  OnwardModel: Onward = new Onward();
  RoundTripModel: RoundTrip = new RoundTrip();
   rDate:string="";
  ngOnInit(): void {
  }
  SearchFlight() {
    
    if(Boolean(this.SearchModel.isRoundTrip) == true)
    {
      if(this.SearchModel.roundStartDateTime.length == 0)
      {
        alert("Please Select Round Trip Date");
        return;
      }
      
    }
     this.rDate=this.SearchModel.roundStartDateTime;
    if(Boolean(this.SearchModel.isRoundTrip) == false)
    {
       this.rDate = "2022-07-06";
    }
    var searchDetails = {
      boardingPlace: this.SearchModel.boardingPlace,
      destination: this.SearchModel.destination,
      startDateTime: (this.SearchModel.startDateTime),
      isRoundTrip: Boolean(this.SearchModel.isRoundTrip),
      roundStartDateTime:this.rDate
    }
    //console.log(this.SearchResultsModel);
    console.log(searchDetails);
  //  console.log(this.SearchModel);
    this.http.post(this.urlsModel.urlsearch, searchDetails).subscribe(res => this.GetFromServer(res), res => console.log(res));
    // this.SearchModel = new search();
  }
  GetFromServer(res: any) {
    console.log(res);
    this.OnwardModels = res.onward;
    this.RoundTripModels = res.roundTrip;
  }
  hasError(typeofvalidator: string, controlname: string): Boolean {
    return this.SearchModel.formSearchGroup.controls[controlname].hasError(typeofvalidator);
  }
  selectedRowOnward(res: Onward) {
    this.OnwardModel = res;
  }
  selectedRowRoundTrip(res: RoundTrip) {
    this.RoundTripModel = res;
  }
  navigateToBookTicket() {

    var toData = {
      boarding: this.SearchModel.boardingPlace,
      destination: this.SearchModel.destination,
      isRoundTrip: this.SearchModel.isRoundTrip,
      startDateTime: this.SearchModel.startDateTime,
      roundTripStartDateTime: this.SearchModel.roundStartDateTime,
      
     
      endDateTime: this.OnwardModel.startDateTime,
      flightId: this.OnwardModel.flightId,
      flightNo: this.OnwardModel.flightNo,
      ticketCost: this.OnwardModel.ticketCost,

      roundTripEndDateTime: this.RoundTripModel.startDateTime,
      roundTripFlightNo: this.RoundTripModel.flightNo,
      rflightId: this.RoundTripModel.flightId,
      rticketCost: this.RoundTripModel.ticketCost,
    }
    console.log(toData);
    this._router.navigate(['Booking/BookFlight'], { state: toData });
  }

  CheckRoundTrip(res: search) {
    if (res.isRoundTrip == true) {
      return true;
    }
    else {
      return false;
    }
  }


}
