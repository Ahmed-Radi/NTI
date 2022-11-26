import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateformComponent } from './templateform/templateform.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateformComponent,
    ReactiveformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
