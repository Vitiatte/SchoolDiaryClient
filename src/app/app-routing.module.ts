import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ParentDetailComponent} from './parent-detail/parent-detail.component';
import {ScheduleComponent} from './schedule/schedule.component';
import {GradebookComponent} from './gradebook/gradebook.component';

const routes: Routes = [
  { path: '', redirectTo: 'employee', pathMatch: 'full' },
  { path: 'parentDetail', component: ParentDetailComponent },
  { path: 'studentDetail', component: ParentDetailComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'gradebook', component: GradebookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
