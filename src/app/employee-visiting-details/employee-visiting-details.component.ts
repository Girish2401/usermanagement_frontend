import { Component, OnInit } from '@angular/core';
import { VisitorService } from '../visitor.service';

@Component({
  selector: 'app-employee-visiting-details',
  templateUrl: './employee-visiting-details.component.html',
  styleUrls: ['./employee-visiting-details.component.scss']
})
export class EmployeeVisitingDetailsComponent implements OnInit {

  constructor(private visitorService: VisitorService) { }

  public employeeVisitingList: any = [];
  public selectedDate: any = Date.now();

  ngOnInit(): void {
    this.getAllVisitors();
  }

  public getAllVisitors() {
    this.visitorService.getAllVisitors().subscribe((res) => {
      console.log(res);
      this.employeeVisitingList = res;
    })

  }
  public onDateChange(event: any) {
    this.visitorService.getAllVisitors(event).subscribe((res) => {
      console.log(res);
      this.employeeVisitingList = res;

    })
    console.log(event);
  }


}
