import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddfacultyListComponent } from './addfaculty-list/addfaculty-list.component';
import { AddfacultyComponent } from './addfaculty/addfaculty.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { CollegeListComponent } from './college-list/college-list.component';
import { CollegeComponent } from './college/college.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseComponent } from './course/course.component';
import { DocumentComponent } from './document/document.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { LoginComponent } from './login/login.component';
import { MarksheetListComponent } from './marksheet-list/marksheet-list.component';
import { MarksheetComponent } from './marksheet/marksheet.component';
import { MenuComponent } from './menu/menu.component';
import { MeritlistComponent } from './meritlist/meritlist.component';
import { RegistrationComponent } from './registration/registration.component';
import { RoleListComponent } from './role-list/role-list.component';
import { RoleComponent } from './role/role.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentComponent } from './student/student.component';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { SubjectComponent } from './subject/subject.component';
import { TimetableListComponent } from './timetable-list/timetable-list.component';
import { TimetableComponent } from './timetable/timetable.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'login', 
    pathMatch:'full'
  },
  { path:'login', component:LoginComponent },
  { path:'logout', component:MenuComponent },
  { path:'sessionOut', component:LoginComponent },
  { path:'welcome', component:WelcomeComponent },
  { path:'marksheet', component:MarksheetComponent },
  { path:'marksheet/:id', component:MarksheetComponent },
  { path:'marksheetlist', component:MarksheetListComponent },
  { path:'meritlist', component:MeritlistComponent },
  { path:'college', component:CollegeComponent },
  { path:'college/:id', component:CollegeComponent },
  { path:'collegelist', component:CollegeListComponent },
  { path:'role', component:RoleComponent },
  { path:'role/:id', component:RoleComponent },
  { path:'rolelist', component:RoleListComponent },
  { path:'course', component:CourseComponent },
  { path:'course/:id', component:CourseComponent },
  { path:'courselist', component:CourseListComponent },
  { path:'student', component:StudentComponent },
  { path:'student/:id', component:StudentComponent },
  { path:'studentlist', component:StudentListComponent },
  { path:'subject', component:SubjectComponent },
  { path:'subject/:id', component:SubjectComponent },
  { path:'subjectlist', component:SubjectListComponent },
  { path:'user', component:UserComponent },
  { path:'user/:id', component:UserComponent },
  { path:'userlist', component:UserListComponent },
  { path:'addfaculty', component:AddfacultyComponent },
  { path:'addfaculty/:id', component:AddfacultyComponent },
  { path:'addfacultylist', component:AddfacultyListComponent },
  { path:'timetable', component:TimetableComponent },
  { path:'timetable/:id', component:TimetableComponent },
  { path:'timetablelist', component:TimetableListComponent },
  { path:'registration', component:RegistrationComponent },
  { path:'changepassword', component:ChangepasswordComponent },
  { path:'forgetpassword', component:ForgetpasswordComponent },
  { path:'**', component:DocumentComponent },
  { path:'document', component:DocumentComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
