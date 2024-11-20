import { Component, OnInit } from '@angular/core';
import { VisitorService } from '../visitor.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-manage-visitors',
  templateUrl: './manage-visitors.component.html',
  styleUrls: ['./manage-visitors.component.scss']
})
export class ManageVisitorsComponent implements OnInit {

  constructor(private visitorService: VisitorService, private location: Location) { }
  public employeeId: any = undefined;
  ngOnInit(): void {
  }

  public createVisitor() {
    this.visitorService.createVisitor({ employee_id: this.employeeId }).subscribe((res) => {
      this.location.back();
    })

  }

}
