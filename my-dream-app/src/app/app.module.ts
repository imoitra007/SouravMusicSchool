import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routing } from "./app.routing";

import { AppComponent } from './app.component';
import { MenuComponent } from './Menu/header/menu.component';
import { LoginComponent } from './Account/login/login.component';
import { CreateteacherComponent } from './Teacher/createteacher/createteacher.component';
import { SearchteacherComponent } from './Teacher/searchteacher/searchteacher.component';
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';
import { ChangepasswordComponent } from './Account/changepassword/changepassword.component';
import { ForgetpasswordComponent } from './Account/forgetpassword/forgetpassword.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    CreateteacherComponent,
    SearchteacherComponent,
    DashboardComponent,
    ChangepasswordComponent,
    ForgetpasswordComponent
  ],
  imports: [
    BrowserModule,
    Routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
