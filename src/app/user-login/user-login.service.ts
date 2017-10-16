import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class UserLoginService {

    private loginServiceURL: string = "http://localhost:8081/taskmanager/getApprovedUser/";
    //private loginServiceURL: string = "../../assets/apiData/loginServiceData.json";
    
    /*headerDict:any = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
    }
      
    headerObj:any = {                                                                                                                                                                                 
        headers: new Headers(this.headerDict), 
    };
    */

    private loginServiceURLWithParam:string;
    
    constructor(private http: Http) { }
    
    getAllUsers(loginID) {
        this.loginServiceURLWithParam = this.loginServiceURL+loginID; 
        return this.http.get(this.loginServiceURLWithParam)
            .map((response :Response) => response.json());
        
        /*return this.http.get(this.loginServiceURL)
            .map((response :Response) => response.json());*/
    }
}




