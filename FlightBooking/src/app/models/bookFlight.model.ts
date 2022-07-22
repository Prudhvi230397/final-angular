import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

export class BookFlight {
  startDateTime: string = '';
  endDateTime: string = '';
  flightNo: string = '';
 // ticketCost: number = 0;
  boardingPlace: string = '';
  destination: string = '';
  emailId: string = '';
  noOfSeats: number = 0;
  isRoundTrip: boolean = false;
  roundTripStartDateTime: string = '';
  roundTripEndDateTime: string = '';
  roundTripFlightNo: string = '';
  passenger: Array<Passenger> = new Array<Passenger>();
  flightId: number = 0;
  rflightId:number=0;
  totalPrice:number=0;
  ticketCost:number=0;
  rticketCost:number=0;
  formBookFlightGroup:FormGroup;//Create

  constructor() {
  

  var _builder = new FormBuilder();
        this.formBookFlightGroup = _builder.group({});

       
         this.formBookFlightGroup.addControl("boardingPlaceControl", new FormControl('', Validators.required));
         this.formBookFlightGroup.addControl("destinationControl", new FormControl('', Validators.required));
         this.formBookFlightGroup.addControl("startDateTimeControl", new FormControl('', Validators.required));
         this.formBookFlightGroup.addControl("isRoundTripControl", new FormControl('', Validators.required));
         this.formBookFlightGroup.addControl("roundTripStartDateTimeControl", new FormControl('', Validators.required));
         this.formBookFlightGroup.addControl("flightNoControl", new FormControl('', Validators.required));
         this.formBookFlightGroup.addControl("endDateTimeControl", new FormControl('', Validators.required));
         this.formBookFlightGroup.addControl("ticketCostControl", new FormControl('', Validators.required));
         this.formBookFlightGroup.addControl("roundTripEndDateTimeControl", new FormControl('', Validators.required));
         this.formBookFlightGroup.addControl("roundTripFlightNoControl", new FormControl('', Validators.required));
         this.formBookFlightGroup.addControl("emailIdControl", new FormControl('', Validators.required));
         this.formBookFlightGroup.addControl("noOfSeatsControl", new FormControl('', Validators.required));
         this.formBookFlightGroup.addControl("passengerNameControl", new FormControl('', Validators.required));
         this.formBookFlightGroup.addControl("genderControl", new FormControl('', Validators.required));
         this.formBookFlightGroup.addControl("ageControl", new FormControl('', Validators.required));
         this.formBookFlightGroup.addControl("nationalIdControl", new FormControl('', Validators.required));
         this.formBookFlightGroup.addControl("seatNoControl", new FormControl('', Validators.required));
         this.formBookFlightGroup.addControl("mealControl", new FormControl('', Validators.required));
  }
}

export class Passenger {
  passengerName: string = '';
  gender: string = '';
  seatNo: string = '';
  rseatNo:string='';
  meal: string = '';
  nationalId: string = '';
  age: number = 0;
}
