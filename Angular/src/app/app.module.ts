import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { AddfacultyComponent } from './addfaculty/addfaculty.component';
import { AddfacultyListComponent } from './addfaculty-list/addfaculty-list.component';
import { CollegeComponent } from './college/college.component';
import { CollegeListComponent } from './college-list/college-list.component';
import { CourseComponent } from './course/course.component';
import { CourseListComponent } from './course-list/course-list.component';
import { DocumentComponent } from './document/document.component';
import { MarksheetComponent } from './marksheet/marksheet.component';
import { MarksheetListComponent } from './marksheet-list/marksheet-list.component';
import { RegistrationComponent } from './registration/registration.component';
import { RoleComponent } from './role/role.component';
import { RoleListComponent } from './role-list/role-list.component';
import { StudentComponent } from './student/student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { SubjectComponent } from './subject/subject.component';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { TimetableComponent } from './timetable/timetable.component';
import { TimetableListComponent } from './timetable-list/timetable-list.component';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MeritlistComponent } from './meritlist/meritlist.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    AddfacultyComponent,
    AddfacultyListComponent,
    CollegeComponent,
    CollegeListComponent,
    CourseComponent,
    CourseListComponent,
    DocumentComponent,
    MarksheetComponent,
    MarksheetListComponent,
    RegistrationComponent,
    RoleComponent,
    RoleListComponent,
    StudentComponent,
    StudentListComponent,
    SubjectComponent,
    SubjectListComponent,
    TimetableComponent,
    TimetableListComponent,
    UserComponent,
    UserListComponent,
    WelcomeComponent,
    MeritlistComponent,
    ChangepasswordComponent,
    ForgetpasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
