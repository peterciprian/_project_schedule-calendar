import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

@Injectable()
export class UserManagementService {
  url: 'http://localhost:3002';


  constructor(public http: Http) { }
  data: any;

  errorHandling(res) {
    res = JSON.parse(res['_body']);
    if (res.error) {
      console.error('API error: ' + res.error);
    }
    else { this.data = res; }
  }

  register(user) {
    this.http.post(this.url + '/register', user).subscribe(
      data => {
        console.log(data);
        this.errorHandling(data);
      });
  }

  login(user) {
    this.http.post(this.url + '/login', user).subscribe(
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
