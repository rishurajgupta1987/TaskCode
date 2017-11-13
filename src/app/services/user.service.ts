import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

    constructor(private http: Http) { }
    applicationUrl: string = "";
    getUserById(loginID: String): Observable<any> {
        return this.http.get(this.applicationUrl)
            .map((response: Response) => response.json());
    }
}