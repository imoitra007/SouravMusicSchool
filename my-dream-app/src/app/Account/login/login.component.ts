import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  showForgetPasswordDiv : Boolean = false;
  showLoginDiv : Boolean = true;

  constructor() { }

  ngOnInit() {
  }

  // This function will be called when we click on "Forget Password" link in UI.
  onClickForgetPassword(){
    this.showForgetPasswordDiv = true;
    this.showLoginDiv = false;
  }

  // This function will be called when we click on "Cancel" button in Forget Password Component.
  onCancelForgetPassword(){
    this.showForgetPasswordDiv = false;
    this.showLoginDiv = true;
  }

}
