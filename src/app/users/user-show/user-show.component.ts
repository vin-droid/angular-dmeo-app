import { Component, OnInit } from '@angular/core';
import { UserService } from './../user.service';
import { User } from '../user';
import { ActivatedRoute } from '@angular/router';
import { GithubService } from './../../github.service';


@Component({
  selector: 'app-user-show',
  templateUrl: './user-show.component.html',
  styleUrls: ['./user-show.component.css'],
  providers: [GithubService, UserService]
})
export class UserShowComponent implements OnInit {
	public user;

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService, private githubService: GithubService) { }

  ngOnInit() {
  	const userId = this.activatedRoute.snapshot.params['userId']
    this.userService.getUserDetails(userId).subscribe(
      res => {
        this.user = res;
      });
  }


}
