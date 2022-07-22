import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookFlight, Passenger } from '../models/bookFlight.model';
import { BookFlightServer } from '../models/bookFlightToServer.model';
import { discount } from '../models/discount';
import { urls } from '../models/urls';

@Component({
    selector: 'app-bookFlight',
    templateUrl: './bookFlight.component.html',

})
export class BookFlightComponent implements OnInit {

    constructor(private http: HttpClient, private _router: Router) {
        //this.name=this._router.getCurrentNavigation().extras.state.boarding;
        console.log(this._router.getCurrentNavigation());
    }
    BookFlightModel: BookFlight = new BookFlight();
    PassengerModel: Passenger = new Passenger();
    PassengerModels: Array<Passenger> = new Array<Passenger>();
    BookFlightServerModel: BookFlightServer = new BookFlightServer();
    urlsModel: urls = new urls();
    DiscountModel: discount = new discount();
    ticketCost: number = 0;
    rticketCost: number = 0;

    ngOnInit(): void {
        this.BookFlightModel.boardingPlace = history.state.boarding;
        this.BookFlightModel.destination = history.state.destination;
        this.BookFlightModel.flightNo = history.state.flightNo;
        this.BookFlightModel.startDateTime = history.state.startDateTime;
        this.BookFlightModel.endDateTime = history.state.endDateTime;
        this.BookFlightModel.isRoundTrip = history.state.isRoundTrip;
        this.BookFlightModel.roundTripFlightNo = history.state.roundTripFlightNo;
        this.BookFlightModel.roundTripStartDateTime = history.state.roundTripStartDateTime;
        this.BookFlightModel.roundTripEndDateTime = history.state.roundTripEndDateTime;
        this.BookFlightModel.flightId = history.state.flightId;
        this.BookFlightModel.rflightId = history.state.rflightId;
        this.BookFlightModel.ticketCost = history.state.ticketCost;
        this.BookFlightModel.rticketCost = history.state.rticketCost;
        // console.log(this.name+" Oninit")
        this.CalculatePrice();
    }
    AddPassenger() {

        this.PassengerModels.push(this.PassengerModel);
        console.log(this.PassengerModels);
        this.PassengerModel = new Passenger();
    }

    DeletePassenger(res: Passenger) {
        var index = this.PassengerModels.indexOf(res);
        this.PassengerModels.splice(index, 1);
        // this.PassengerModels = this.arrayRemove(this.PassengerModel, res)

    }
    arrayRemove(arr: any, value: any) {
        return arr.filter(function (sample: any) {
            return sample != value;
        });
    }
    CheckValidations() {
        if (this.BookFlightModel.noOfSeats == this.PassengerModels.length) {
            //return true;
        }
        else if (this.BookFlightModel.noOfSeats > this.PassengerModels.length) {
            alert("Please Add Passengers");
            return;
        }
        else {
            alert("Cannot Add Passengers more than No of seats");
            return;
        }
    }
    CalculatePrice() {
        let price: number = 0;

        if (this.BookFlightModel.noOfSeats != 0) {
            price = (Number(this.BookFlightModel.ticketCost) * Number(this.BookFlightModel.noOfSeats));
            this.BookFlightModel.totalPrice = Number(price);
            if (this.BookFlightModel.isRoundTrip) {
                price = (Number(this.BookFlightModel.ticketCost) * Number(this.BookFlightModel.noOfSeats)) +
                    (Number(this.BookFlightModel.rticketCost) * Number(this.BookFlightModel.noOfSeats));
                this.BookFlightModel.totalPrice = Number(price);
            }
        }
        else {
            this.BookFlightModel.totalPrice = price;
        }
    }
    rSDate:string="";
    rEDate:string="";
    rflight:string="";
    BookFlight() {
        this.CheckValidations();
        this.rSDate=this.BookFlightModel.roundTripStartDateTime;
        this.rEDate=this.BookFlightModel.roundTripEndDateTime;
        this.rflight=this.BookFlightModel.roundTripFlightNo;
        if(Boolean(this.BookFlightModel.isRoundTrip) == false)
        {
           this.rSDate = "2022-07-06";
           this.rEDate = "2022-07-06";
           this.rflight = "AB-1111";
        }
        this.BookFlightServerModel.boarding = this.BookFlightModel.boardingPlace,
            this.BookFlightServerModel.flightNo = this.BookFlightModel.flightNo,
            this.BookFlightServerModel.destination = this.BookFlightModel.destination,
            this.BookFlightServerModel.startDateTime = (this.BookFlightModel.startDateTime),
            this.BookFlightServerModel.isRoundTrip = Boolean(this.BookFlightModel.isRoundTrip),
            this.BookFlightServerModel.endDateTime = this.BookFlightModel.endDateTime,
            this.BookFlightServerModel.emailId = this.BookFlightModel.emailId,
            this.BookFlightServerModel.noOfSeats = this.BookFlightModel.noOfSeats,

            this.BookFlightServerModel.roundTripStartDateTime = this.rSDate,
            this.BookFlightServerModel.roundTripEndDateTime = this.rEDate,
            this.BookFlightServerModel.roundTripFlightNo = this.rflight,

            this.BookFlightServerModel.flightId = Number(this.BookFlightModel.flightId),
            this.BookFlightServerModel.rflightId = Number(this.BookFlightModel.rflightId),
            this.BookFlightServerModel.ticketCost = Number(this.BookFlightModel.ticketCost),
            this.BookFlightServerModel.rticketCost = Number(this.BookFlightModel.rticketCost),
            this.BookFlightServerModel.totalPrice = Number(this.BookFlightModel.totalPrice),

            this.BookFlightServerModel.passenger = this.PassengerModels;

        console.log(this.BookFlightServerModel);
        // console.log(bookflight);
        const urlbook: string = this.urlsModel.urlBook + this.BookFlightModel.flightNo;
        this.http.post(urlbook, this.BookFlightServerModel).subscribe(res => { console.log(res), this.ResponseAlert(res) }, res => { this.ResponseAlert(res), console.log(res) });
        // this.SearchModel = new search();
    }
    ApplyDiscount() {
        if (this.DiscountModel.discountCode == "") {
            alert("Enter Coupon Code to Apply discount");
            return;
        }
        this.http.get(this.urlsModel.urlDiscValue + this.DiscountModel.discountCode).subscribe(res => this.GetFromServer(res), res => { this.GetFromServer(res), console.log(res) });
    }
    GetFromServer(res: any) {
        console.log(res);
        if (res == 0) {
            alert("Invalid Coupon Code ");
            return;
        }
        else {

            let totPrice: number = Number(this.BookFlightModel.totalPrice);
            let discprice: number = totPrice - ((Number(res) * totPrice) / 100);

            this.BookFlightModel.totalPrice = discprice;
            alert("Discount Applied Successfully . New Discounted Price is " + discprice);
        }
    }

    ResponseAlert(res: any) {
        if (res.status == 200) {
            alert(res.error.text);

        }

    }
}
