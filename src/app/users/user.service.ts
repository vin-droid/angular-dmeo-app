import { Injectable } from '@angular/core';
import { User } from './user';
import { USERS } from './../mock-users-list';

@Injectable()
export class UserService {

  constructor() { }

  getUsers():User[] {
  	return USERS;
  }
}
