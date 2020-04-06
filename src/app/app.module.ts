import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import {AppComponent} from './app.component';
import {ParentDetailComponent} from './parent-detail/parent-detail.component';
import {HttpClientModule} from '@angular/common/http';
import { ScheduleComponent } from './schedule/schedule.component';
import { HeaderComponent } from './header/header.component';
import { LearnDayComponent } from './schedule/learn-day/learn-day.component';
import { GradebookComponent } from './gradebook/gradebook.component';
import { ScoreComponent } from './gradebook/score/score.component';
import { ParentSearchComponent } from './parent-search/parent-search.component';
import {DatePipe} from '@angular/common';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ParentDetailComponent,
    ScheduleComponent,
    HeaderComponent,
    LearnDayComponent,
    GradebookComponent,
    ScoreComponent,
    ParentSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
