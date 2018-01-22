import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { CITIES } from '../../cities-mock';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { AddressComponent } from '../../shared/address/address.component';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent implements OnInit {
  public user = new User();
  public submitted: boolean = false;
  public formSubmitResponse: string;
  public cities = CITIES;
  public userForm: FormGroup;

  

  constructor(private userService: UserService, private _fb: FormBuilder) { }

  ngOnInit() {
    this.userForm = this._fb.group({
            name: ['', [Validators.required, Validators.minLength(5)]],
            addresses: this._fb.array([
                this.initAddress(),
            ])
        });
  }

  initAddress() {
      // initialize our address
      return this._fb.group({
          address_line_1: ['', Validators.required],
          pincode: ['']
      });
  }

  addAddress() {
    // add address to the list
    const control = <FormArray>this.userForm.controls['addresses'];
    control.push(this.initAddress());
  }

  removeAddress(i: number) {
    // remove address from the list
    const control = <FormArray>this.userForm.controls['addresses'];
    control.removeAt(i);
  }

  createUser(user){
  	this.submitted = true;
  	this.formSubmitResponse = "creating user..."
  	this.userService.createUser(user).subscribe(
  	res =>{
  		this.formSubmitResponse = "User was Successfully created."
  	},
  	error =>{
	  	let log = ["Error:"];
	  	let error_body = JSON.parse(error._body);
	  	for(let key in error_body){
				log.push(error_body[key]);
			};
  		this.formSubmitResponse = log.toString();
  	});
  }

}
