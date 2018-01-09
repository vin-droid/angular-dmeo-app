import { Component, OnInit } from '@angular/core';
import { GithubService } from './../../github.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {

  public searchText ;
  public searchResult;
  public searchCount;
  constructor(private githubService: GithubService, private router: Router ) { }

  ngOnInit() {
  }

  getUsers(){
  	this.githubService.getUsers(this.searchText).subscribe(
      res => {
        this.searchResult = res;
        this.searchCount = res.total_count;
      }
    );
  }

  getUserDetails(user){
    this.router.navigate(['user', user.login])
  }

  onKeyup(event){
  	this.searchText = event.target.value;
  }

}
