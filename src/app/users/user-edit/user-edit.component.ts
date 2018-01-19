import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import {Router, ActivatedRoute} from '@angular/router';
import {User} from '../user';
import {CITIES} from '../../cities-mock'


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
  providers: []
})
export class UserEditComponent implements OnInit {
	public user: User;
	public cities = CITIES;
  public submitted: boolean = false;
  public formSubmitResponse: string;

  constructor(private router: Router,
  	private activatedRoute: ActivatedRoute,
  	private userService: UserService) { }

  ngOnInit() {
  	const userId = this.activatedRoute.snapshot.params['userId']
    this.userService.getUserDetails(userId).subscribe(
      res => {
        this.user = res;
      });
  }

  updateUser(user){
    this.submitted = true;
  	this.formSubmitResponse = "updating user..."
  	this.userService.updateUser(user).subscribe(
  	res =>{
  		this.formSubmitResponse = "User was Successfully updates.";
  		debugger;
  		this.user = res.json();
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
