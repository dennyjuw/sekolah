import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeacherService } from '../../services/teacher/teacher.service';

@Component({
  selector: 'app-teacher-add',
  providers: [TeacherService],
  templateUrl: './teacher-add.component.html',
  styleUrls: ['./teacher-add.component.scss']
})
export class TeacherAddComponent implements OnInit {

  private mode: String;
  private teacherId;

  constructor(private teacherService: TeacherService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => this.teacherId = params.teacherId);
    this.mode = (this.teacherId !== undefined) ? 'edit' : 'add';
  }

}
