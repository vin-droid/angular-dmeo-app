import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import {Router, ActivatedRoute} from '@angular/router';
import {User} from '../user';


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
  providers: []
})
export class UserEditComponent implements OnInit {
	public user;
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

}
