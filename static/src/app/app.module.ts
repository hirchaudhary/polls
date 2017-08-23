import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { BeltService } from './belt.service';
import { HomeComponent } from './home/home.component';
import { AddquestionComponent } from './addquestion/addquestion.component';
import { QuestionComponent } from './question/question.component';

import { CanActivate } from '@angular/router';
import { LoginActivate } from './login-activate';
@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    HomeComponent,
    AddquestionComponent,
    QuestionComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [BeltService, LoginActivate],
  bootstrap: [AppComponent]
})
export class AppModule { }
