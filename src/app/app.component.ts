import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';
  isPanelOpen = false;
  constructor(private router: Router) { }

  public tabs = [
    {
      "name": "employee",
      "icon": "pi pi-users",
      route: "",
      command: () => {
        this.changeRoute("")
      },
    },
    {
      "name": "security",
      "icon": "pi pi-lock",
      route: "security",
      command: () => {
        this.changeRoute("security")
      },
    },
    {
      "name": "approver",
      "icon": "pi pi-key",
      route: "approver",
      command: () => {
        this.changeRoute("approver")
      },
    }
  ]

  closePanel() {
    this.isPanelOpen = false;
  }

  togglePanel() {
    this.isPanelOpen = !this.isPanelOpen;
  }
  changeRoute(path: any) {
    this.isPanelOpen = !this.isPanelOpen;
    this.router.navigate([`${path}`]);
  }
}
