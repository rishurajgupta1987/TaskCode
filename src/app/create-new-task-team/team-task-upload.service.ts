import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class TeamTaskUploadService {

    //Service URL Section
    private taskFileUploadServiceURL = "http://localhost:8081/taskmanager/uploadFile";

    constructor(private http: Http) { }

    upload(formData) {
        return this.http.post(this.taskFileUploadServiceURL, formData).map((response: Response) => response.json());
    }

}