import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/Rx';

@Injectable()
export class GithubService {

baseApi: string = "https://api.github.com/search/users?q="
  constructor(private http: Http) { }

  getUser(searchText: string): Observable<any>{
  	const url = this.baseApi + searchText;
  	console.log(url);

	return this.http.get(url).map(
      res => {
        const data = res.json();
        console.log(data);
        return data;
      }
    )

  }
}
