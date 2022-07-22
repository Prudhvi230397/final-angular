import { NgForm, FormGroup, Validators, FormBuilder, FormControl } from "@angular/forms";

export class search {
    
    boardingPlace: string = '';
    destination: string = '';
    startDateTime: string = '';
   // endDateTime: string = '';
    isRoundTrip:boolean=false;
    roundStartDateTime:string = '';
   // roundEndDateTime:Date=new Date();

   formSearchGroup: FormGroup;//Create


    constructor() {
        var _builder = new FormBuilder();
        this.formSearchGroup = _builder.group({});

       
        this.formSearchGroup.addControl("boardingPlaceControl", new FormControl('', Validators.required));
        this.formSearchGroup.addControl("destinationControl", new FormControl('', Validators.required));
        this.formSearchGroup.addControl("startDateTimeControl", new FormControl('', Validators.required));
      //  this.formSearchGroup.addControl("endDateTimeControl", new FormControl('', Validators.required));
        this.formSearchGroup.addControl("isRoundTripControl", new FormControl('', Validators.required));
        //this.formSearchGroup.addControl("roundStartDateTimeControl", new FormControl('', Validators.required));
       // this.formSearchGroup.addControl("roundEndDateTimeControl", new FormControl('', Validators.required));
        

        //    var validationcollection = [];
        //     validationcollection.push(Validators.required);
        //     validationcollection.push(Validators.pattern("^[0-9]{4,4}$"))
        //     this.formAirlineGroup.addControl("CustomerCodeControl", new FormControl('', Validators.compose(validationcollection)));

    }
}