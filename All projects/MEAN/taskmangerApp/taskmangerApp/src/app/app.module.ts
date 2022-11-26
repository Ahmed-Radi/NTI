import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SignUpComponent } from './views/sign-up/sign-up.component';
import { LoginComponent } from './views/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { ProfileComponent } from './views/profile/profile.component';
import { UsersService } from './services/users.service';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { ViewTasksComponent } from './views/view-tasks/view-tasks.component';
import { AddTasksComponent } from './views/add-tasks/add-tasks.component';
import { UpdateTaskComponent } from './views/update-task/update-task.component';
import { EditProfileComponent } from './views/edit-profile/edit-profile.component';
import { AuthGuardService } from './services/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SignUpComponent,
    LoginComponent,
    ProfileComponent,
    ViewTasksComponent,
    AddTasksComponent,
    UpdateTaskComponent,
    EditProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    UsersService,
    AuthService,
    AuthGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
