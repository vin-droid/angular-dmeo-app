import { Component, OnInit } from '@angular/core';
import { UserService } from './../user.service';
import { User } from '../user';


@Component({
  selector: 'app-user-show',
  templateUrl: './user-show.component.html',
  styleUrls: ['./user-show.component.css']
})
export class UserShowComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }


}
