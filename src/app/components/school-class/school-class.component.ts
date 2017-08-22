import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SchoolService } from '../../services/school/school.service';

@Component({
  selector: 'app-school-class',
  providers: [SchoolService],
  templateUrl: './school-class.component.html',
  styleUrls: ['./school-class.component.scss']
})
export class SchoolClassComponent implements OnInit {

  classList;

  constructor(
    private schoolService: SchoolService,
    private router: Router
  ) { }

  ngOnInit() {
    this.classList = this.schoolService.getClassList();
  }

  editClass(classId) {
    this.router.navigate(['/school/class/edit', classId]);
  }
}
