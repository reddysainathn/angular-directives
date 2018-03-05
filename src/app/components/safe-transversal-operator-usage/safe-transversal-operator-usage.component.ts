import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-safe-transversal-operator-usage',
  templateUrl: './safe-transversal-operator-usage.component.html',
  styleUrls: ['./safe-transversal-operator-usage.component.css']
})
export class SafeTransversalOperatorUsageComponent implements OnInit {
  task = {
    title: " Review Applications",
    assignees: {
      name: null
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
