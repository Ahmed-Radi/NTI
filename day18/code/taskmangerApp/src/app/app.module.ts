import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './views/sign-up/sign-up.component';
import { LoginComponent } from './views/login/login.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AuthService } from './services/auth.service';
import { ProfileComponent } from './views/profile/profile.component';
import { UsersService } from './services/users.service';
import {TokenInterceptorService} from './services/token-interceptor.service'

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    UsersService,
    // TokenInterceptorService
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
