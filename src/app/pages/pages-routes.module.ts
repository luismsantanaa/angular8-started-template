import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const pagesRoutes: Routes = [
  {path: '',
   component: PagesComponent,
  children: [
    { path: 'dashboard', component: DashboardComponent, data: { title: 'Dashboard' } },
    { path: '', pathMatch: 'full', redirectTo: '/dashboard' }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(pagesRoutes)],
  exports: [RouterModule]
})
export class PagesRoutesModule { }
