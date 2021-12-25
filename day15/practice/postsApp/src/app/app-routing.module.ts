import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './views/about/about.component';
import { PostsComponent } from './views/posts/posts.component';
import { SinglePostComponent } from './views/single-post/single-post.component';
import { UsersComponent } from './views/users/users.component';

const routes: Routes = [
  {path:'', component:UsersComponent},
  {path:'posts', component:PostsComponent},
  {path:'about', component:AboutComponent},
  {path:'singlePost/:id', component:SinglePostComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
