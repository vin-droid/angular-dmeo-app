import { Injectable } from '@angular/core';
import { User } from './user';
import { Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { contentHeaders } from '../http-config';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class UserService {
	baseApi = "http://localhost:3000/users";
	public updatedData = new Subject<any>();
	public options = {}
  constructor(private http: Http) {
   }

  getUsers(username: string = ""): Observable<any[]> {
  	const url = this.baseApi + "?username=" + username
  	return this.http.get(url, {headers: contentHeaders}).map(
  		res => {
		    const data = res.json();
		    this.updatedData.next(data);
		    return data;
		  });
  }

	getUserDetails(userId): Observable<any>{
		const url = this.baseApi + "/" + userId;
		return this.http.get(url).map(
			res =>{
				const data = res.json();
				return data;
			});
	}

	createUser(user){
		const url = this.baseApi
		 return this.http.post(url,user);
	}

	updateUser(user){
		const url = this.baseApi + "/" + user.id
		return this.http.put(url, user)
	}
}
