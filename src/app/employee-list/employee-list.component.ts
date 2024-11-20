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
    this.getAllUsers();
  }

  public getAllUsers() {
    this.employeeService.getAllEmployees().subscribe((employees: any) => {
      this.employeeList = employees;
    })
  }
  public performOpertaion(operation: string, employee: any) {
    switch (operation) {
      case "edit":
        this.router.navigate(['/employee', employee.cid]);
        break;
      case "delete":
        // this.employeeService.deleteUser(user).subscribe((userId: any) => {
        //   this.getAllUsers();
        // });
        break;
    }
  }

  public getEmployeeVisitingDetails(employee: any) {
    this.router.navigate(['/employee', 'getDetails', employee.cid]);
  }

}
