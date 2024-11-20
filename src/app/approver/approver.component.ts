import { Component, OnInit } from '@angular/core';
import { VisitorService } from '../visitor.service';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ConfirmationService, MessageService } from 'primeng/api';


@Component({
  selector: 'app-approver',
  templateUrl: './approver.component.html',
  styleUrls: ['./approver.component.scss']
})
export class ApproverComponent implements OnInit {

  constructor(private visitorService: VisitorService, private confirmationService: ConfirmationService, private messageService: MessageService) { }

  public visitors: any = [];
  public checkin_visitors: any = [];
  public checkout_visitors: any = [];

  ngOnInit(): void {
    this.getAllVisitors();
  }

  public getAllVisitors() {
    this.visitorService.getAllVisitors().subscribe((res) => {
      console.log(res);
      this.visitors = res;
      this.checkin_visitors = this.visitors.filter((visitor: any) => visitor.status == 'pending' && visitor.isCheckedIn == false);
      this.checkout_visitors = this.visitors.filter((visitor: any) => visitor.status == 'pending' && visitor.isCheckedIn == true);
    })
  }

  public approveVisitor(visitor: any) {
    // visitor.status = "accepted";
    // visitor.approver_checkin_request_status = true;
    // this.visitorService.updateVisitor(visitor._id, visitor).subscribe((res) => {
    //   console.log(res);
    // });
  }

  public approveVisitorExit(visitor: any) {

  }

  confirm(event: any, visitor: any) {
    this.confirmationService.confirm({
      target: event.target,
      message: 'Are you sure that you want to proceed?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        visitor.status = "accepted";
        visitor.approver_checkin_request_status = true;
        this.visitorService.updateVisitor(visitor._id, visitor).subscribe((res) => {
          this.getAllVisitors();
          console.log(res);
        });
        this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' });
      },
      reject: () => {
        visitor.status = "rejected";
        visitor.approver_checkin_request_status = true;
        this.visitorService.updateVisitor(visitor._id, visitor).subscribe((res) => {
          console.log(res);
          this.getAllVisitors();
        });
        this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
      }
    });
  }

  confirmCheckout(event: any, visitor: any) {
    this.confirmationService.confirm({
      target: event.target,
      message: 'Are you sure that you want to proceed?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        visitor.status = "accepted";
        visitor.approver_checkout_request_status = true;
        this.visitorService.updateVisitor(visitor._id, visitor).subscribe((res) => {
          this.getAllVisitors();
          console.log(res);
        });
        this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' });
      },
      reject: () => {
        visitor.status = "rejected";
        visitor.approver_checkout_request_status = true;
        this.visitorService.updateVisitor(visitor._id, visitor).subscribe((res) => {
          console.log(res);
          this.getAllVisitors();
        });
        this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
      }
    });
  }

}
