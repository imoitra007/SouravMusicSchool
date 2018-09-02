import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routing } from "./app.routing";

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { CreateteacherComponent } from './Teacher/createteacher/createteacher.component';
import { SearchteacherComponent } from './Teacher/searchteacher/searchteacher.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    ForgetpasswordComponent,
    CreateteacherComponent,
    SearchteacherComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    Routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
