import { AdminDashboard2Component } from './../admin/admin-dashboard2/admin-dashboard2.component';
import { AdminDashboard1Component } from './../admin/admin-dashboard1/admin-dashboard1.component';
import { StarterComponent } from './../starter/starter.component';
import { AppComponent } from './../app.component';
import { AdminComponent } from './../admin/admin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClientComponent } from './../client/client.component';
import { VehiclesComponent } from './../vehicles/vehicles.component';
import { CompaniesComponent } from '../companies/companies.component';
import { VacanciesComponent } from '../vacancies/vacancies.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'client', component: ClientComponent },
      { path: 'vehicles', component: VehiclesComponent },
      { path: 'companies', component: CompaniesComponent },
      { path: 'vacancies', component: VacanciesComponent }
    ])
  ],
  declarations: [],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
