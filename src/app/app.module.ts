import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { CollapseModule, ModalModule, DatepickerModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { NavigationComponent } from './common/navigation/navigation.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TeacherListComponent } from './components/teacher-list/teacher-list.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { StaffListComponent } from './components/staff-list/staff-list.component';
import { SchoolTimetableComponent } from './components/school-timetable/school-timetable.component';
import { TeacherAddComponent } from './components/teacher-add/teacher-add.component';
import { SchoolClassComponent } from './components/school-class/school-class.component';
import { SchoolClassEditComponent } from './components/school-class-edit/school-class-edit.component';

export const ROUTES: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'teacher', component: TeacherListComponent },
  { path: 'teacher/add', component: TeacherAddComponent},
  { path: 'teacher/edit/:teacherId', component: TeacherAddComponent},
  { path: 'staff', component: StaffListComponent },
  { path: 'student', component: StudentListComponent },
  { path: 'school/class', component: SchoolClassComponent },
  { path: 'school/class/edit/:classId', component: SchoolClassEditComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    DashboardComponent,
    TeacherListComponent,
    StudentListComponent,
    StaffListComponent,
    SchoolTimetableComponent,
    TeacherAddComponent,
    SchoolClassComponent,
    SchoolClassEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
    CollapseModule.forRoot(),
    ModalModule.forRoot(),
    DatepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


