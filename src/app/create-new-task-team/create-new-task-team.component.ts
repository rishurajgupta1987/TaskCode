import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarModule, MultiSelectModule } from 'primeng/primeng';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectItem } from 'primeng/primeng';
import { Router } from '@angular/router';
import { TeamTaskUploadService } from './team-task-upload.service';
import { FileUploadModule } from 'primeng/primeng';
import { Headers, RequestOptions } from '@angular/http';

declare var $: any;

@Component({
  selector: 'app-create-new-task-team',
  templateUrl: './create-new-task-team.component.html',
  styleUrls: ['./create-new-task-team.component.css'],
  providers: [TeamTaskUploadService]
})
export class CreateNewTaskTeamComponent implements OnInit {

  users: SelectItem[];
  uploadedFiles = [];  
  //prepareAttachments = [];
  showSuccess: boolean = false;
  //@ViewChild("taskAttachments") task_Attachments: any;


  constructor(private router: Router, private teamTaskUploadService: TeamTaskUploadService) {
    this.users = [];
    this.users.push({ label: 'Rishu Gupta', value: 'rishu.gupta' });
    this.users.push({ label: 'Paresh Rai', value: 'Paresh.rai' });
    this.users.push({ label: 'Deepika Gupta', value: 'deepika.gupta' });
    this.users.push({ label: 'CP Gupta', value: 'cp.gupta' });
    this.users.push({ label: 'Amresh Mishra', value: 'amresh.mishra' });

  }

  ngOnInit() {

  }

  createTaskRequestForm = new FormGroup({
    taskType: new FormControl('teamTask'),
    taskName: new FormControl('', [Validators.pattern('^[a-z A-Z]*$'), Validators.required, Validators.minLength(5)]),
    assignedTo: new FormControl([], Validators.required),
    targetDate: new FormControl('', Validators.required),
    taskAttachments: new FormControl(),
    priority: new FormControl('medium', Validators.required),
    taskStatus: new FormControl('open', Validators.required),
    aboutTask: new FormControl('')
  });

  //Page Back to Question Page
  backToSelection() {
    this.router.navigateByUrl('applicationHome/createNewRequestQuestion');
  }

  //Attach File Function
  attachFile(event) {
    let fileList:any = event.files;

    fileList.forEach(element => {
      this.uploadedFiles.push(element.name);
      console.log(this.uploadedFiles);
      if (fileList.length > 0) {
        let formData: FormData = new FormData();
        formData.append('file', element, element.name);
        try{
          this.showSuccess = true;
          $("button[ng-reflect-label='Cancel']").click();
          setTimeout(() => {
            this.showSuccess = false;
          }, 2000);
          this.teamTaskUploadService.upload(formData).subscribe(responseData => {
            //console.log(responseData);
          });
        }
        catch(e){}
      }
    });

    //this.prepareAttachments.push(this.task_Attachments.nativeElement.value);
  }

  //Create Team Task Function
  createTeamTask(taskRequestData) {
    //taskRequestData.taskAttachments = this.prepareAttachments;
    taskRequestData.taskAttachments = this.uploadedFiles;
    console.log(taskRequestData);
  }


}
