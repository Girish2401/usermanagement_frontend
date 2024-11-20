import { Component, OnInit } from '@angular/core';
import { VisitorService } from '../visitor.service';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss']
})
export class SecurityComponent implements OnInit {

  constructor(private visitorService: VisitorService) { }
  public visitors: any = [];
  public checkin_visitors: any = [];
  public checkout_visitors: any = [];
  public pending_rejected_visitors: any = [];


  ngOnInit(): void {
    this.getAllVisitors();
  }

  public getAllVisitors() {
    this.visitorService.getAllVisitors().subscribe((res) => {
      console.log(res);
      this.visitors = res;
      this.pending_rejected_visitors = this.visitors.filter((visitor: any) => ["pending", "rejected"].includes(visitor.status));
      this.checkin_visitors = this.visitors.filter((visitor: any) => visitor.approver_checkin_request_status && visitor.status == "accepted" && !visitor.isCheckedIn);
      this.checkout_visitors = this.visitors.filter((visitor: any) => visitor.isCheckedIn);
      console.log(this.pending_rejected_visitors);
    })
  }

  public allowVisitor(visitor: any) {
    visitor.isCheckedIn = true;
    visitor.security_checkin_request_status = true;
    visitor.checkin_time = Date.now();
    this.visitorService.updateVisitor(visitor._id, visitor).subscribe((res) => {
      console.log(res);
      this.getAllVisitors();
    });
  }

  public requestVisitorExit(visitor: any) {
    visitor.security_checkout_request_status = true;
    visitor.status = "pending";
    this.visitorService.updateVisitor(visitor._id, visitor).subscribe((res) => {
      console.log(res);
      this.getAllVisitors();
    });
  }

  public allowVisitorExit(visitor: any) {
    visitor.status = 'completed';
    visitor.isCheckedIn = false;
    visitor.checkout_time = Date.now();
    this.visitorService.updateVisitor(visitor._id, visitor).subscribe((res) => {
      console.log(res);
      this.getAllVisitors();
    });
  }
}
