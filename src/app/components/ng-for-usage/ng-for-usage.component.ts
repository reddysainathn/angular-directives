import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-usage',
  templateUrl: './ng-for-usage.component.html',
  styleUrls: ['./ng-for-usage.component.css']
})
export class NgForUsageComponent implements OnInit {

  courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' }
  ];
  onAdd() {
    this.courses.push({ id: 4, name: 'course4' })
  }
  onRemove(course) {
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1)
  }
  onChange(course) {
    course.name = "Updated!";
  }
  constructor() { }

  ngOnInit() {
  }

}
