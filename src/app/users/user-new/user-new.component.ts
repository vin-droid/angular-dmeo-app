import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent implements OnInit {
  user = new User;
  submitted: boolean = false;
  routeId: any;
  successUrl: string;
  errorUrl: string;

  cities = [{id: 1, name: "kanpur"},{id: 2, name: "kanpur"},{id: 3, name: "kanpur"},
  {id: 4, name: "kanpur"},{id: 5, name: "kanpur"},{id: 6, name: "kanpur"},
  {id: 7, name: "kanpur"},{id: 8, name: "kanpur"},{id: 9, name: "kanpur"}]
  constructor() { }

  ngOnInit() {
  }

}
