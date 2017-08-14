import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CollapseModule } from 'ngx-bootstrap';

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

export const ROUTES: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'teacher', component: TeacherListComponent },
  { path: 'teacher/add', component: TeacherAddComponent},
  { path: 'teacher/edit/:teacherId', component: TeacherAddComponent},
  { path: 'staff', component: StaffListComponent },
  { path: 'student', component: StudentListComponent },
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
    TeacherAddComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    CollapseModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


