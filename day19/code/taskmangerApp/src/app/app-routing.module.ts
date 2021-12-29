import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './views/add-task/add-task.component';
import { EditTaskComponent } from './views/edit-task/edit-task.component';
import { LoginComponent } from './views/login/login.component';
import { ProfileComponent } from './views/profile/profile.component';
import { SignUpComponent } from './views/sign-up/sign-up.component';
import { TasksComponent } from './views/tasks/tasks.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'signup',component:SignUpComponent},
  {path:'profile',component:ProfileComponent},
  {path:'tasks',component:TasksComponent},
  {path:'addTask',component:AddTaskComponent},
  {path:'editTask/:id',component:EditTaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
