import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { FormsModule } from '@angular/forms';

@Injectable()
export class UserManagementService {
  url: 'http://localhost:3002';
  datas: any;
  user: {
    username: 'ggjzg';
    email: '';
    password: '';
  };

  constructor(public http: Http, /*private user: UserData*/) { }


  errorHandling(res) {
    res = JSON.parse(res['_body']);
    if (res.error) {
      console.error('API error: ' + res.error);
    }
    else { this.datas = res; }
  }

  register() {
    this.http.post(this.url + '/register', this.user).subscribe(
      data => {
        console.log(data);
        this.errorHandling(data);
      });
  }

  login() {
    this.http.post(this.url + '/login', this.user).subscribe(
      data => {
        console.log(data);
        this.errorHandling(data);
      });
  }

  logout() {
    this.http.post(this.url + '/logout', this.user).subscribe(
      data => {
        console.log(data);
        this.errorHandling(data);
      });
  }
}

interface UserData {
  username: string;
  email: string;
  password: string;
}