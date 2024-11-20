import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { ManageEmployeeComponent } from './manage-employee/manage-employee.component';
import { SecurityComponent } from './security/security.component';
import { ManageVisitorsComponent } from './manage-visitors/manage-visitors.component';
import { ApproverComponent } from './approver/approver.component';
import { EmployeeVisitingDetailsComponent } from './employee-visiting-details/employee-visiting-details.component';

const routes: Routes = [
  { path: '', component: EmployeeListComponent },
  { path: 'employee/:id', component: ManageEmployeeComponent },
  { path: 'employee/getDetails/:id', component: EmployeeVisitingDetailsComponent },
  { path: 'add', component: ManageEmployeeComponent },
  { path: 'security', component: SecurityComponent },
  { path: 'visitor/add', component: ManageVisitorsComponent },
  { path: 'approver', component: ApproverComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
