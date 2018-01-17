import { Component, OnInit } from '@angular/core';
import { GithubService } from './../../github.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service'

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {

  public searchText ;
  public searchResult;
  public searchCount;
  constructor(private userService: UserService, private router: Router ) { }

  ngOnInit() {
  }

  getUsers(){
  	this.userService.getUsers(this.searchText).subscribe(
      res => {
        this.searchResult = res;
        this.searchCount = res.length;
      }
    );
  }

  getUserDetails(user){
    this.router.navigate(['user', user.id])
  }

  onKeyup(event){
  	this.searchText = event.target.value;
  }

}
