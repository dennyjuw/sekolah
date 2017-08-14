import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TeacherService } from '../../services/teacher/teacher.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

@Component({
  selector: 'app-teacher-add',
  providers: [TeacherService],
  templateUrl: './teacher-add.component.html',
  styleUrls: ['./teacher-add.component.scss']
})
export class TeacherAddComponent implements OnInit {

  private mode: String;
  private teacherId;
  public modalRef: BsModalRef;

  constructor(
    private teacherService: TeacherService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private modalService: BsModalService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => this.teacherId = params.teacherId);
    this.mode = (this.teacherId !== undefined) ? 'edit' : 'add';
  }

  onCancel(template: TemplateRef<any>) {
    //show confirmation modal popup
    this.modalRef = this.modalService.show(template);
    //this.router.navigate(['/teacher']);
  }

}
