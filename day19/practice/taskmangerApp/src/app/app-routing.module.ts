import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { ProfileComponent } from './views/profile/profile.component';
import { SignUpComponent } from './views/sign-up/sign-up.component';
import { ViewTasksComponent } from './views/view-tasks/view-tasks.component';
import { AddTasksComponent } from './views/add-tasks/add-tasks.component';
import { UpdateTaskComponent } from './views/update-task/update-task.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'signup', component: SignUpComponent},
  {path: 'profile', component:ProfileComponent},
  {path: 'viewtask',component: ViewTasksComponent},
  {path: 'addtask',component:AddTasksComponent},
  {path: 'edittask/:id', component:UpdateTaskComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
