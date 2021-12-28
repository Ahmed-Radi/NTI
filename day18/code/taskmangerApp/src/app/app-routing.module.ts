import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { ProfileComponent } from './views/profile/profile.component';
import { SignUpComponent } from './views/sign-up/sign-up.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'signup',component:SignUpComponent},
  {path:'profile',component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
