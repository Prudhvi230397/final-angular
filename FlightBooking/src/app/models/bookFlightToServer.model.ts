import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

export class BookFlightServer {
  startDateTime: string = '';
  endDateTime: string = '';
  flightNo: string = '';
  boarding: string = '';
  destination: string = '';
  emailId: string = '';
  noOfSeats: number = 0;
  isRoundTrip: boolean = false;
  roundTripStartDateTime: string = '';
  roundTripEndDateTime: string = '';
  roundTripFlightNo: string = '';
  flightId: number = 0;
  rflightId: number = 0;
  totalPrice: number = 0;
  ticketCost: number = 0;
  rticketCost: number = 0;
  passenger: Array<Passenger> = new Array<Passenger>();


  constructor() {
  }



}

export class Passenger {
  passengerName: string = '';
  gender: string = '';
  seatNo: string = '';
  meal: string = '';
  nationalId: string = '';
  age: number = 0;
}
