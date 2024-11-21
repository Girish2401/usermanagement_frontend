import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  public employeeList: Array<any> = [];
  constructor(private router: Router, private employeeService: EmployeeServiceService) { }

  ngOnInit(): void {
    this.getAllEmployees();
  }

  public getAllEmployees() {
    this.employeeService.getAllEmployees().subscribe((employees: any) => {
      this.employeeList = employees.data;
    })
  }
  public performOpertaion(operation: string, employee: any) {
    switch (operation) {
      case "edit":
        this.router.navigate(['/employee', employee.cid]);
        break;
      case "delete":
        this.employeeService.deleteEmployee(employee.cid).subscribe((employeeId: any) => {
          this.getAllEmployees();
        });
        break;
    }
  }

  public getEmployeeVisitingDetails(employee: any) {
    this.router.navigate(['/employee', 'getDetails', employee.cid]);
  }

}
