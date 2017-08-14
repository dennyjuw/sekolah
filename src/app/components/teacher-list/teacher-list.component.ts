import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../../services/teacher/teacher.service';
import { CollapseModule } from 'ngx-bootstrap/collapse';

@Component({
  selector: 'app-teacher-list',
  providers: [TeacherService],
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.scss']
})
export class TeacherListComponent implements OnInit {

  teacherList;

  constructor(private teacherService: TeacherService) { }

  ngOnInit() {
    this.teacherList = this.teacherService.getTeacherList();
    console.log(this.teacherList);
  }

  trackById(index, teacher) {
    return teacher.id;
  }

}
