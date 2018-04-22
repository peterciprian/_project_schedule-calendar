import { Component, OnInit } from '@angular/core';
import { UserManagementService } from '../user-management.service';
import { FormsModule } from '@angular/forms';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { RoleApiComponent } from '../role-api/role-api.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.pug',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  user: object = {
    username: '',
    email: '',
    password: ''
  }

  constructor(private userService: UserManagementService, public http: HttpClient) {
  }
  login() {
    this.userService.login(this.user)
  }

  register() {
    this.userService.register(this.user)
  }

  logout() {
    this.userService.logout()
  }

}
