import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { SignUpComponent } from './views/sign-up/sign-up.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ProfileComponent } from './views/profile/profile.component';
import { AuthService } from './services/auth.service';
import { UsersService } from './services/users.service';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { NewsComponent } from './views/news/news.component';
import { UpdateNewsComponent } from './views/update-news/update-news.component';
import { AddNewsComponent } from './views/add-news/add-news.component';
import { SingleNewsComponent } from './views/single-news/single-news.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    HeaderComponent,
    FooterComponent,
    ProfileComponent,
    NewsComponent,
    UpdateNewsComponent,
    AddNewsComponent,
    SingleNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    AuthService,
    UsersService,{
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
