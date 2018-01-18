import { Component, OnInit } from '@angular/core';
import { UserService } from './../user.service';
import { User } from '../user';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-user-show',
  templateUrl: './user-show.component.html',
  styleUrls: ['./user-show.component.css'],
  providers: [UserService]
})
export class UserShowComponent implements OnInit {
	public user;

  constructor(private activatedRoute: ActivatedRoute,
   private userService: UserService,
   private router: Router) { }

  ngOnInit() {
  	const userId = this.activatedRoute.snapshot.params['userId']
    this.userService.getUserDetails(userId).subscribe(
      res => {
        this.user = res;
      });
  }

  editUser(user){
    this.router.navigate(['users', 'edit', user.id])
  }


}
