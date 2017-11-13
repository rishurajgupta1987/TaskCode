import { Component, OnInit } from '@angular/core';
import { LoginModel } from './login.model';
import { UserService } from '../../services/user.service';

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

  valiateUser = (loginID: String) => {
    let isUser: boolean = false;
    this.USERS.forEach(element => {
      if (loginID === element) isUser = true;
    });
    return isUser;
  }


}
