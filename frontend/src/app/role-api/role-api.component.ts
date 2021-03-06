import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { UserManagementService } from '../user-management.service';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-role-api',
  templateUrl: './role-api.component.pug',
  styleUrls: ['./role-api.component.css']
})
export class RoleApiComponent implements OnInit {
  datas: any;
  roles: any;
  actualRole: object = {
    userid: '',
    title: '',
    description: '',
    time: '',
    loction: '',
    color: '',
  }

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
      });
  }

  getAllFromUser(userId) {
    this.http.get('http://localhost:3002/role/getuser/' + userId).subscribe(
      getData => {
        this.roles = getData;
        console.log(this.roles)
      });
  }

  create(userId) {
    this.newRole['userid'] = userId;
    this.http.post('http://localhost:3002/role', this.newRole).subscribe(
      data => {
        console.log(data);
        this.getAllFromUser(userId);
      });
  }

  update(role) {
    this.http.put('http://localhost:3002/role/' + role['_id'], role).subscribe(
      data => {
        console.log(data);
      });
  }

  delete(userId, roleId) {
    this.http.put('http://localhost:3002/role/deleterole/' + roleId, { userid: userId }).subscribe(
      data => {
        console.log(data);
        this.getAllFromUser(userId);
      });
  }


}