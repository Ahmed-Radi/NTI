import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewsComponent } from './views/add-news/add-news.component';
import { LoginComponent } from './views/login/login.component';
import { NewsComponent } from './views/news/news.component';
import { ProfileComponent } from './views/profile/profile.component';
import { SignUpComponent } from './views/sign-up/sign-up.component';
import { SingleNewsComponent } from './views/single-news/single-news.component';
import { UpdateNewsComponent } from './views/update-news/update-news.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'signup',component:SignUpComponent},
  {path:'profile',component:ProfileComponent},
  {path:'addnews', component:AddNewsComponent},
  {path:'news', component:NewsComponent},
  {path:'editnews/:id',component:UpdateNewsComponent},
  {path:'singlenews/:id',component:SingleNewsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
