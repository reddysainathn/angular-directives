import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch-case-usage',
  templateUrl: './ng-switch-case-usage.component.html',
  styleUrls: ['./ng-switch-case-usage.component.css']
})
export class NgSwitchCaseUsageComponent implements OnInit {
  viewMode = 'map';
  constructor() { }

  ngOnInit() {
  }

}
