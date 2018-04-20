import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { UserManagementService } from '../user-management.service';

@Component({
  selector: 'app-role-api',
  templateUrl: './role-api.component.pug',
  styleUrls: ['./role-api.component.css']
})
export class RoleApiComponent implements OnInit {
  datas: any;
  roles: any;

  newRole: object = {
    userid: '',
    title: '',
    description: '',
    time: '',
    loction: '',
    color: '',
  }
  constructor(public http: HttpClient, private userService: UserManagementService) {
    console.log(userService)
  }

  ngOnInit() {
  }

  errorHandling(res) {
    res = JSON.parse(res['_body']);
    if (res.error) {
      console.error('API error: ' + JSON.stringify(res.error));
    }
    else { this.datas = res; }
  }

  getAll() {
    this.http.get('http://localhost:3002/role').subscribe(
      data => {
        this.roles = data;
        this.errorHandling(data);
      });
  }

  create(uid) {
    this.newRole['userid'] = uid;
    this.http.post('http://localhost:3002/role', this.newRole).subscribe(
      data => {
        console.log(data);
        this.errorHandling(data);
      });
  }

  update() {
    this.http.put('http://localhost:3002/role/' + this.newRole['_id'], this.newRole).subscribe(
      data => {
        console.log(data);
        this.errorHandling(data);
      });
  }

  delete(uid) {
    this.newRole['userid'] = uid;
    this.http.delete('http://localhost:3002/role/' + this.newRole['_id'], this.newRole).subscribe(
      data => {
        console.log(data);
        this.errorHandling(data);
      });
  }


}