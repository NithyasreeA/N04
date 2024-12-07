import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SummaryComponent } from './components/summary/summary.component';
import { ReportsComponent } from './components/reports/reports.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'summary', component: SummaryComponent },
      { path: 'reports', component: ReportsComponent },
    ]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
