import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserManagementService } from './user-management.service';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RoleApiComponent } from './role-api/role-api.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    RoleApiComponent
  ],
  imports: [
    HttpModule,
    HttpClientModule,
    BrowserModule,
    FormsModule
  ],
  providers: [UserManagementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
