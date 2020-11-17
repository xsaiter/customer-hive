import { Component, OnInit } from '@angular/core';
import { TabService } from '../core/services/tab.service';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent implements OnInit {

  constructor(private tabService: TabService) { }

  ngOnInit(): void {
  }

  onCreateNewCustomer(): void {
    this.tabService.createNewCustomer();
  }

  onViewAllCustomers(): void {
    this.tabService.viewAllCustemers();
  }
}
