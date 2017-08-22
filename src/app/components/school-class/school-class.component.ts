import { Component, OnInit } from '@angular/core';
import { SchoolService } from '../../services/school/school.service';

@Component({
  selector: 'app-school-class',
  providers: [SchoolService],
  templateUrl: './school-class.component.html',
  styleUrls: ['./school-class.component.scss']
})
export class SchoolClassComponent implements OnInit {

  classList;

  constructor(private schoolService: SchoolService) { }

  ngOnInit() {
    this.classList = this.schoolService.getClassList();
  }

  editClass(classId) {
    alert('editClass ' + classId);
  }
}
