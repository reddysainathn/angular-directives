import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hidden-usage',
  templateUrl: './hidden-usage.component.html',
  styleUrls: ['./hidden-usage.component.css']
})
export class HiddenUsageComponent implements OnInit {

  courses = [1, 2];

  constructor() { }

  ngOnInit() {
  }

}
