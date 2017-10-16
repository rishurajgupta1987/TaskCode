import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Headers, Http } from '@angular/http';
import { UserLoginService } from './user-login.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
  providers: [UserLoginService]
})
export class UserLoginComponent implements OnInit {

  adminUserList: any;
  showMsg: boolean = false;
  loggedUserID: string;
  validateFlag: boolean = false;
  enterpriseIdValidation = '';

  constructor(private router: Router, private userloginservice: UserLoginService) { }

  ngOnInit() {
    /*this.userloginservice.getAllUsers()
      .subscribe(responseData => this.adminUserList = responseData);*/
  }

  loginForm = new FormGroup({
    enterpriseID: new FormControl('', [Validators.pattern('^[a-zA-Z.]*$'), Validators.required, Validators.minLength(2)])
  });

  //validate UserLogin
  validateUser() {
    this.loggedUserID = this.loginForm.value.enterpriseID;

    this.userloginservice.getAllUsers(this.loggedUserID)
      .subscribe(responseData => {
        this.adminUserList = responseData;

        /*this.adminUserList.forEach(element => {
          if (element.userID == this.loggedUserID) {
            this.validateFlag = true;
            localStorage.setItem("userName", JSON.stringify(element));   
          }        
          localStorage.setItem("validateUser", this.validateFlag.toString());
        });*/

        if (this.adminUserList.loginID == this.loggedUserID) {
          this.validateFlag = true;
          localStorage.setItem("userName", JSON.stringify(this.adminUserList));
        }
        localStorage.setItem("validateUser", this.validateFlag.toString());


        if (this.validateFlag) {
          this.router.navigateByUrl('applicationHome');
        }
        else {
          //show error messgae if user does not exist!
          this.showMsg = true;
          setTimeout(() => {
            this.showMsg = false;
          }, 2000);
        }


      });




  }//validate Userlogin closed here



}
