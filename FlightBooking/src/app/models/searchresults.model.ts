export class SearchResults {
   onward:Array<Onward>=new Array<Onward>();
   roundTrip:Array<RoundTrip> = new Array<RoundTrip>();
    constructor() {
        
    }
}

export class Onward{
  airlineLogo: string = '';
  airlineName: string = '';
  startDateTime: string = '';
  endDateTime: string = '';
  flightNo: string = '';
  ticketCost:number=0;
  flightId:number=0;
}
export class RoundTrip{
  airlineLogo: string = '';
  airlineName: string = '';
  startDateTime: string = '';
  endDateTime: string = '';
  flightNo: string = '';
  ticketCost:number=0;
  flightId:number=0;
}