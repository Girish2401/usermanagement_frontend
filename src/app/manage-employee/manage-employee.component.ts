import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-manage-employee',
  templateUrl: './manage-employee.component.html',
  styleUrls: ['./manage-employee.component.scss']
})
export class ManageEmployeeComponent implements OnInit {

  constructor(private employeeService: EmployeeServiceService, private fb: FormBuilder, private route: ActivatedRoute, private router: Router,private location:Location) { }
  public employeeDetails: FormGroup = this.fb.group({
    name: this.fb.control('', Validators.required),
    cid: this.fb.control('', Validators.required)
  });

  ngOnInit(): void {
    if (this.route.snapshot.params['id']) {
      this.employeeService.getEmployee(this.route.snapshot.params['id']).subscribe((employee) => {
        console.log(employee);
        this.employeeDetails.patchValue(employee[0]);
        console.log(this.employeeDetails);
      });
    }
  }

  updateUser() {
    if (this.employeeDetails.valid) {
      if (this.route.snapshot.params['id']) {
        this.employeeService.updateEmployee(this.route.snapshot.params['id'], this.employeeDetails.value).subscribe((employee: any) => {
          this.location.back();
        })
      }
      else {
        this.employeeService.createEmployee(this.employeeDetails.value).subscribe((employee: any) => {
          this.location.back();
        })
      }
    }
  }
}
