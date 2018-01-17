import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/Rx';

@Injectable()
export class GithubService {

	baseApi: string = "https://api.github.com/search/users?q="
	baseApi2: string = "https://api.github.com/users/"
  constructor(private http: Http) { }

	getUsers(searchText: string): Observable<any>{
		const url = this.baseApi + searchText;

		return this.http.get(url).map(
		  res => {
		    const data = res.json();
		    return data;
		  }
		)
	}
	getUserDetails(userId): Observable<any>{
		const url = this.baseApi2 + userId;
		return this.http.get(url).map(
			res =>{
				const data = res.json();
				return data; 
			});
	}
}
