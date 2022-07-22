import { Time } from "@angular/common";
import { NgForm, FormGroup, Validators, FormBuilder, FormControl } from "@angular/forms";
import { getTime } from "date-fns";
import { timeInterval } from "rxjs";

export class inventory {
    flightNo: string = '';
    airlineId: number = 0;
    boardingPlace: string = '';
    destination: string = '';
    startDateTime: string = '';
    endDateTime: string = '';
    scheduledDaysId: string = '';
    instrumentUsed: string = '';
    businessClassSeats: number = 0;
    economySeats: number = 0;
    ticketCost: number = 0;
    noOfRows: number = 0;
    mealId: string = '';
    monday:boolean=false;
    tuesday:boolean=false;
    wednesday:boolean=false;
    thursday:boolean=false;
    friday:boolean=false;
    saturday:boolean=false;
    sunday:boolean=false;
    travelstarttime: string="";
    travelendtime: string="";


    formInventoryGroup: FormGroup;//Create


    constructor() {
        var _builder = new FormBuilder();
        this.formInventoryGroup = _builder.group({});

        this.formInventoryGroup.addControl("flightNoControl", new FormControl('', Validators.required));
        this.formInventoryGroup.addControl("airlineIdControl", new FormControl('', Validators.required));
        this.formInventoryGroup.addControl("boardingPlaceControl", new FormControl('', Validators.required));
        this.formInventoryGroup.addControl("destinationControl", new FormControl('', Validators.required));
        this.formInventoryGroup.addControl("startDateTimeControl", new FormControl('', Validators.required));
        this.formInventoryGroup.addControl("endDateTimeControl", new FormControl('', Validators.required));
       // this.formInventoryGroup.addControl("scheduledDaysIdControl", new FormControl('', Validators.required));
        this.formInventoryGroup.addControl("instrumentUsedControl", new FormControl('', Validators.required));
        this.formInventoryGroup.addControl("businessClassSeatsControl", new FormControl('', Validators.required));
        this.formInventoryGroup.addControl("economySeatsControl", new FormControl('', Validators.required));
        this.formInventoryGroup.addControl("ticketCostControl", new FormControl('', Validators.required));
        this.formInventoryGroup.addControl("noOfRowsControl", new FormControl('', Validators.required));
        this.formInventoryGroup.addControl("mealIdControl", new FormControl('', Validators.required));
        this.formInventoryGroup.addControl("travelstarttimeControl", new FormControl('', Validators.required));
        this.formInventoryGroup.addControl("travelendtimeControl", new FormControl('', Validators.required));
        

        //    var validationcollection = [];
        //     validationcollection.push(Validators.required);
        //     validationcollection.push(Validators.pattern("^[0-9]{4,4}$"))
        //     this.formAirlineGroup.addControl("CustomerCodeControl", new FormControl('', Validators.compose(validationcollection)));

    }
}
export class airlineDetails
{
    airlineId: number = 0;
    airlineName: string = "";
}