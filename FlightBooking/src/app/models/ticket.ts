export class ticket {
    pnr: string = "";
}

export class ticketDetails {
    bookingId: number = 0;
    pnr: string = '';
    isCancelled: boolean = false;
    startDateTime: string = '';
    endDateTime: string = '';
    flightNo: string = '';
    ticketCost: number = 0;
    boarding: string = '';
    destination: string = '';
    emailId: string = '';
    noOfseats: number = 0;
    isRoundTrip: boolean = false;
    totalCost:  number = 0;
   
}