import { Component, OnInit } from '@angular/core';
import { LoginModel } from './login.model';
import { UserService } from '../../services/user.service';
import { Usermodel } from './user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {


  APPTITLE: String = "Application Login";
  USERS: String[] = ["rishu.gupta", "anish.gupta"];

  //Calling a class model
  Login = new LoginModel();


  constructor() {
  }

  ngOnInit() {
    //set the value to the class model
    this.Login.firstName = "Rishu";
    this.Login.lastName = "Gupta";

  }

  //Interface use for typesafety
  testUser = (): Usermodel => {
    let user ={
      "firstName": "rishu"
    }
    return user;
  }

  valiateUser = (loginID: String): boolean => {
    let isUser: boolean = false;
    this.USERS.forEach(element => {
      if (loginID === element) isUser = true;
    });
    return isUser;
  }


}
