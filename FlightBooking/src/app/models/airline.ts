import { NgForm,FormGroup,Validators,FormBuilder,FormControl } from "@angular/forms";

export class airline{
    airlineName:string='';
    airlineLogo:string='';
    contactNo:number=0;
    address:string='';
    isBlocked:boolean=false;
    formAirlineGroup:FormGroup;//Create
    constructor() {
        var _builder=new FormBuilder();
       this.formAirlineGroup=_builder.group({});

       this.formAirlineGroup.addControl("airlineNameControl",new FormControl('',Validators.required));
       this.formAirlineGroup.addControl("airlineLogoControl",new FormControl('',Validators.required));
       this.formAirlineGroup.addControl("contactNoControl",new FormControl('',Validators.required));
       this.formAirlineGroup.addControl("addressControl",new FormControl('',Validators.required));
      // this.formAirlineGroup.addControl("isBlockedControl",new FormControl('',Validators.required));

    //    var validationcollection = [];
    //     validationcollection.push(Validators.required);
    //     validationcollection.push(Validators.pattern("^[0-9]{4,4}$"))
    //     this.formAirlineGroup.addControl("CustomerCodeControl", new FormControl('', Validators.compose(validationcollection)));

    }
}

export class airlineDetails{
    airlineId:number=0;
    airlineName:string='';
    airlineLogo:string='';
    contactNo:number=0;
    address:string='';
    isBlocked:boolean=false;
}