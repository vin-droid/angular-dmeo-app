import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { CITIES } from '../../cities-mock';

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
  		this.formSubmitResponse = log.toString();
  	});
  }

}
