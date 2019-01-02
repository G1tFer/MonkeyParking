import { AdminDashboard2Component } from './../admin/admin-dashboard2/admin-dashboard2.component';
import { AdminDashboard1Component } from './../admin/admin-dashboard1/admin-dashboard1.component';
import { StarterComponent } from './../starter/starter.component';
import { AppComponent } from './../app.component';
import { AdminComponent } from './../admin/admin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClientComponent } from './../client/client.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { CompanyComponent } from './../company/company.component';
import { VehicleComponent } from '../vehicle/vehicle.component';
import { VacancyComponent } from '../vacancy/vacancy.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'client', component: ClientComponent },
      { path: 'vehicle', component: VehicleComponent },
      { path: 'company', component: CompanyComponent },
      { path: 'vacancy', component: VacancyComponent }
    ])
  ],
  declarations: [],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
