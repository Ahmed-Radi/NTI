import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { FormsModule } from '@angular/forms';
import { TemperaturePipe } from './temperature.pipe';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component'


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    TemperaturePipe,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
