import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';
import { AddTaskComponent } from './views/add-task/add-task.component';
import { EditProfileComponent } from './views/edit-profile/edit-profile.component';
import { EditTaskComponent } from './views/edit-task/edit-task.component';
import { LoginComponent } from './views/login/login.component';
import { ProfileComponent } from './views/profile/profile.component';
import { SignUpComponent } from './views/sign-up/sign-up.component';
import { TasksComponent } from './views/tasks/tasks.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'signup',component:SignUpComponent},
  {path:'profile',component:ProfileComponent,canActivate:[AuthGuardService]},
  {path:'tasks',component:TasksComponent,canActivate:[AuthGuardService]},
  {path:'addTask',component:AddTaskComponent,canActivate:[AuthGuardService]},
  {path:'editTask/:id',component:EditTaskComponent,canActivate:[AuthGuardService]},
  {path:'editProfile',component:EditProfileComponent,canActivate:[AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
