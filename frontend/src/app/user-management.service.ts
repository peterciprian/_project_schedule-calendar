import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { FormsModule } from '@angular/forms';

@Injectable()
export class UserManagementService /*implements UserData*/ {
  /*user: {
    username: string,
    email: string,
    password: string
  }
*/
  loggedIn: boolean = false;
  datas: any;
  loggedInUser: any;


  constructor(public http: Http) { }

  errorHandling(res) {
    res = JSON.parse(res['_body']);
    if (res.error) {
      console.error('API error: ' + JSON.stringify(res.error));
    }
    else { this.datas = res; }
  }

  register(user) {
    this.http.post('http://localhost:3002/register', user).subscribe(
      data => {
        console.log(data);
        this.errorHandling(data);
      });
  }

  login(user) {
    this.http.post('http://localhost:3002/login', user).subscribe(
      data => {
        console.log(data);
        this.loggedIn = data.ok;
        this.loggedInUser = JSON.parse(data['_body']).user;
        this.errorHandling(data);
      });
  }

  logout() {
    this.http.get('http://localhost:3002/logout').subscribe(
      data => {
        this.loggedIn = false;
        console.log(data);
        this.errorHandling(data);
      });
  }
}

/*interface UserData {
  user: {
    username: string,
    email: string,
    password: string
  }
}*/