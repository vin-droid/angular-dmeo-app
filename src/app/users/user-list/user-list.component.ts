import { Component, OnInit } from '@angular/core';
import { UserService } from './../user.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
	users: User[]
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  	this.userService.getUsers().subscribe(
  		res =>{
  			this.users = res;
  		});
  	this.userService.updatedData.subscribe(
  	res =>{
  		this.users = res;
  	})
  }

  getUserDetails(user){
    this.router.navigate(['users', user.id])
  }

}
