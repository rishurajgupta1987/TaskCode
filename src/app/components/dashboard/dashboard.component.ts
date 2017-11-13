import { Component, OnInit } from '@angular/core';
import {DashboardInterface} from './dashboard.interface';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit, DashboardInterface {

  appTitle = "Application Dashboard";

  constructor() { }

  ngOnInit() {
  }

}
