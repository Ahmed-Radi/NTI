import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './views/card/card.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SingleUserComponent } from './views/single-user/single-user.component';
import { HttpClientModule } from '@angular/common/http';
import { EditInfoComponent } from './views/edit-info/edit-info.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HeaderComponent,
    FooterComponent,
    SingleUserComponent,
    EditInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
