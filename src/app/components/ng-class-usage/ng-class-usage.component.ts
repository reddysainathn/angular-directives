import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class-usage',
  templateUrl: './ng-class-usage.component.html',
  styleUrls: ['./ng-class-usage.component.css']
})
export class NgClassUsageComponent implements OnInit {
  isSelected;
  onClick() {
    this.isSelected = !this.isSelected
  }
  constructor() { }

  ngOnInit() {
  }

}
