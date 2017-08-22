import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SchoolService } from '../../services/school/school.service';
import { TeacherService } from '../../services/teacher/teacher.service';

@Component({
  selector: 'app-school-class-edit',
  providers: [SchoolService, TeacherService],
  templateUrl: './school-class-edit.component.html',
  styleUrls: ['./school-class-edit.component.scss']
})
export class SchoolClassEditComponent implements OnInit {

  private classId;
  private classData;
  private teacherData;

  constructor(
    private schoolService: SchoolService,
    private teacherService: TeacherService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => this.classId = params.classId);
    this.classData = this.schoolService.getClass(this.classId);
    this.teacherData = this.teacherService.getTeacherList();
  }

}
