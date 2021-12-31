import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { ProfileComponent } from './views/profile/profile.component';
import { SignUpComponent } from './views/sign-up/sign-up.component';
import { ViewTasksComponent } from './views/view-tasks/view-tasks.component';
import { AddTasksComponent } from './views/add-tasks/add-tasks.component';
import { UpdateTaskComponent } from './views/update-task/update-task.component';
import { EditProfileComponent } from './views/edit-profile/edit-profile.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'signup', component: SignUpComponent},
  {path: 'profile', component:ProfileComponent,canActivate:[AuthGuardService]},
  {path: 'viewtask',component: ViewTasksComponent,canActivate:[AuthGuardService]},
  {path: 'addtask',component:AddTasksComponent,canActivate:[AuthGuardService]},
  {path: 'edittask/:id', component:UpdateTaskComponent,canActivate:[AuthGuardService]},
  {path: 'editprofile', component:EditProfileComponent,canActivate:[AuthGuardService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
