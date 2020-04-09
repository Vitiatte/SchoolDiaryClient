import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {ParentDetailComponent} from './detail/parent-detail/parent-detail.component';
import {HttpClientModule} from '@angular/common/http';
import {ScheduleComponent} from './schedule/schedule.component';
import {HeaderComponent} from './header/header.component';
import {LearnDayComponent} from './schedule/learn-day/learn-day.component';
import {GradebookComponent} from './gradebook/gradebook.component';
import {ScoreComponent} from './gradebook/score/score.component';
import {ParentSearchComponent} from './search-forms/parent-search/parent-search.component';
import {DatePipe} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {AuthGuard} from './service/guard/auth.guard';
import { HomeworkComponent } from './homework/homework.component';
import { StudentSearchComponent } from './search-forms/student-search/student-search.component';
import { SearchFormComponent } from './search-forms/search-form.component';
import {ServiceConstants} from './service/service-constants';
import { StudentDetailComponent } from './detail/student-detail/student-detail.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentDetailComponent,
    ScheduleComponent,
    HeaderComponent,
    LearnDayComponent,
    GradebookComponent,
    ScoreComponent,
    ParentSearchComponent,
    LoginComponent,
    HomeComponent,
    HomeworkComponent,
    StudentSearchComponent,
    SearchFormComponent,
    StudentDetailComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    DatePipe,
    AuthGuard,
    ServiceConstants],
  bootstrap: [AppComponent]
})
export class AppModule {
}
