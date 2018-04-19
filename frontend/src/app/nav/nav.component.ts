import { Component, OnInit } from '@angular/core';
import { UserManagementService } from '../user-management.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.pug',
  styleUrls: ['./nav.component.css'],
  providers: [UserManagementService],
})
export class NavComponent implements OnInit {

  constructor(private userManagementService: UserManagementService) {
    console.log(this.userManagementService);
  }
  ngOnInit() {
  }

}
