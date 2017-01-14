import { Component, OnInit } from '@angular/core';
import {PageBreadCrumb} from '../fragments/breadcrumbs/PageBreadCrumb';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  breadcrumbs:PageBreadCrumb;

  constructor() { }

  ngOnInit() {
    this.breadcrumbs = <PageBreadCrumb>{};
    this.breadcrumbs.header = "Calendar";
    this.breadcrumbs.subHeader = "Plan your month here";
    this.breadcrumbs.iconName = "fa-calendar";
    this.breadcrumbs.trail =["Calendar"];
  }

}
