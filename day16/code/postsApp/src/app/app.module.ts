import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UsersComponent } from './views/users/users.component';
import { PostsComponent } from './views/posts/posts.component';
import { AboutComponent } from './views/about/about.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { UserService } from './services/user.service';
import { PostsService } from './services/posts.service';
import { SinglePostComponent } from './views/single-post/single-post.component';
import { EditPostComponent } from './views/edit-post/edit-post.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PostsComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    SinglePostComponent,
    EditPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    UserService,
    PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
