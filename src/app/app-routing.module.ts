import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ParentDetailComponent} from './detail/parent-detail/parent-detail.component';
import {ScheduleComponent} from './schedule/schedule.component';
import {GradebookComponent} from './gradebook/gradebook.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './service/guard/auth.guard';
import {HomeworkComponent} from './homework/homework.component';
import {DetailComponent} from './detail/detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'detail', component: DetailComponent, canActivate: [AuthGuard] },
  { path: 'schedule', component: ScheduleComponent, canActivate: [AuthGuard] },
  { path: 'gradebook', component: GradebookComponent, canActivate: [AuthGuard] },
  { path: 'homework', component: HomeworkComponent, canActivate: [AuthGuard]},
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
