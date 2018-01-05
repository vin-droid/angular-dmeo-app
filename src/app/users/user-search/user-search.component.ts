import { Component, OnInit } from '@angular/core';
import { GithubService } from './../../github.service';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {

  public searchText ;
  public searchResult;
  public searchCount;
  constructor(private githubService: GithubService ) { }

  ngOnInit() {
  }

  getUsers(){
  	this.githubService.getUser(this.searchText).subscribe(
      res => {
        this.searchResult = res;
        this.searchCount = res.total_count;
      }
    );
  }

  onKeyup(event){
  	this.searchText = event.target.value;
  }

}
