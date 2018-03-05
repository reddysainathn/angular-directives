import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style-usage',
  templateUrl: './ng-style-usage.component.html',
  styleUrls: ['./ng-style-usage.component.css']
})
export class NgStyleUsageComponent implements OnInit {
  canSave =false;
  constructor() { }
  onClick(){
    this.canSave = !this.canSave;
  }
  ngOnInit() {
  }

}
