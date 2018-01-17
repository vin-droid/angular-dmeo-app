import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service'

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent implements OnInit {
  user = new User();
  submitted: boolean = false;
  routeId: any;
  successUrl: string;
  errorUrl: string;
  formSubmitResponse: string;

  cities = [{id: 1, name: "kanpur"},{id: 2, name: "delhi"},{id: 3, name: "Nagpur"},
  {id: 4, name: "Allahabad"},{id: 5, name: "fatehpur"},{id: 6, name: "Gurgoan"},
  {id: 7, name: "Nainital"},{id: 8, name: "Mirzapur"},{id: 9, name: "pune"}]

  constructor(private userService: UserService) { }

  ngOnInit() {
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
  		this.formSubmitResponse = log;
  	});
  }

}
