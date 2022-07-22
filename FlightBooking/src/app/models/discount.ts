import { NgForm,FormGroup,Validators,FormBuilder,FormControl } from "@angular/forms";

export class discount{
    discountCode:string='';
    discountValue:string='';
    expiryDate:string="";
    formDiscountGroup:FormGroup;//Create
    constructor() {
        var _builder=new FormBuilder();
       this.formDiscountGroup=_builder.group({});

       this.formDiscountGroup.addControl("discountCodeControl",new FormControl('',Validators.required));
       this.formDiscountGroup.addControl("discountValueControl",new FormControl('',Validators.required));
       this.formDiscountGroup.addControl("expiryDateControl",new FormControl('',Validators.required));
      
    }
   
}
export class discountData{
    discountCode:string='';
    discountValue:string='';
    expiryDate:string="";
    discountId:number=0;
}