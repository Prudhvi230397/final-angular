import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

export class userdata {
    userName: string = '';
    password: string = '';
    formUserGroup: FormGroup;//Create
    constructor() {
        var _builder = new FormBuilder();
        this.formUserGroup = _builder.group({});


        this.formUserGroup.addControl("UserNameControl", new FormControl('', Validators.required));
        this.formUserGroup.addControl("passWordControl", new FormControl('', Validators.required));

        // var validationcollection = [];
        // validationcollection.push(Validators.required);
        // validationcollection.push(Validators.pattern("/^[a-zA-Z0-9!@#$%^&*]{6,16}$/"))
        // this.formUserGroup.addControl("passWordControl", new FormControl('', Validators.compose(validationcollection)));

    }
}