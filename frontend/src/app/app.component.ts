import { Component } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { UserManagementService } from './user-management.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.pug',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  url: 'http://localhost:3002';
  user: UserData;

  constructor(private userManagementService: UserManagementService) {
  }
}
interface UserData {
  username: string;
  email: string;
  password: string;
}