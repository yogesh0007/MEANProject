import { Component, OnInit } from "@angular/core";
import { FormBuilder, ControlGroup, Validators, Control } from "@angular/common";

@Component({
  selector: 'my-signup',
  template: `
    <section class="col-md-8 col-md-offset-2">
      <form [ngFormModel]="myForm" (ngSubmit)="onSubmit()">
        <div class="form-group">
          <label for="firstName">First Name</label>
          <input type="text" [ngFormControl]="myForm.find('firstName')" id="firstName" class="form-control">
        </div>
        <div class="form-group">
          <label for="lastName">Last Name</label>
          <input type="text" [ngFormControl]="myForm.find('lastName')" id="lastName" class="form-control">
        </div>
        <div class="form-group">
          <label for="email">Mail</label>
          <input type="text" [ngFormControl]="myForm.find('email')" id="email" class="form-control">
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" [ngFormControl]="myForm.find('password')" id="password" class="form-control">
        </div>
        <button class="btn btn-primary" [disabled]="!myForm.valid">Sign Up</button>
      </form>
    </section>
  `
})
export class SignupComponent implements OnInit{

  myForm: ControlGroup;
  constructor(private _fb: FormBuilder){}

  onSubmit(){
    console.log(this.myForm.value);
  }

  ngOnInit(){
    this.myForm = this._fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.compose ([Validators.required, this.isEmail])],
      password: ['', Validators.required],
    });
  }

  private isEmail(control: Control) : {[s: string] : boolean}{
    if(!control.value.match('[a-zA-Z]+')){
      return {invalidMail : true}
    }

  }

}
