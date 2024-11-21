import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ManageEmployeeComponent } from './manage-employee/manage-employee.component';
import { SecurityComponent } from './security/security.component';
import { TabViewModule } from 'primeng/tabview';
import { ManageVisitorsComponent } from './manage-visitors/manage-visitors.component';
import { ApproverComponent } from './approver/approver.component';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { EmployeeVisitingDetailsComponent } from './employee-visiting-details/employee-visiting-details.component';
import { CalendarModule } from 'primeng/calendar';
import { SidebarModule } from "primeng/sidebar"


@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    ManageEmployeeComponent,
    SecurityComponent,
    ManageVisitorsComponent,
    ApproverComponent,
    EmployeeVisitingDetailsComponent
  ],
  imports: [
    ConfirmPopupModule,
    ToastModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    CalendarModule,
    BrowserAnimationsModule,
    ButtonModule,
    SidebarModule,
    InputTextModule,
    TableModule,
    TabViewModule
  ],
  providers: [ConfirmationService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
