import {Component, OnInit, Input} from '@angular/core';
import {PageBreadCrumb} from './PageBreadCrumb';

@Component({
  selector: 'breadcrumbs',
  templateUrl: 'breadcrumbs.component.html',
  styleUrls: ['breadcrumbs.component.css']
})
export class BreacrumbsComponent implements OnInit {

  @Input()
  breadCrumb:PageBreadCrumb;

  constructor() { }

  ngOnInit() {
  }

}
