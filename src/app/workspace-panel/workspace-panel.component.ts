import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Tab } from '../core/models/tab.model';
import { TabService } from '../core/services/tab.service';

@Component({
  selector: 'app-workspace-panel',
  templateUrl: './workspace-panel.component.html',
  styleUrls: ['./workspace-panel.component.css']
})
export class WorkspacePanelComponent implements OnInit, OnDestroy {
  tabs: Array<Tab> = [];
  subscriptionCreateNewCustomer: Subscription;
  subscriptionViewAllCustomers: Subscription;
  lastTabId: number = 1;

  constructor(private tabService: TabService) {
    this.subscriptionCreateNewCustomer = tabService
      .createNewCustomer$
      .subscribe(() => this.addTabCreateNewCustomer());

    this.subscriptionViewAllCustomers = tabService
      .viewAllCustomers$
      .subscribe(() => this.addTabViewAllCustomers());
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscriptionCreateNewCustomer.unsubscribe();
    this.subscriptionViewAllCustomers.unsubscribe();
  }

  private addTabCreateNewCustomer() {
    let tab = Tab.createEditCustomer();
    tab.id = this.lastTabId++;
    tab.name = "create new customer"
    this.tabs.push(tab);
  }

  private addTabViewAllCustomers() {
    let already = this.tabs.some(t => t.id == 0);
    if (!already) {
      let tab = Tab.createAllCustomers();
      tab.id = 0;
      tab.name = "all customers"
      this.tabs.push(tab);
    }
  }

  onCloseTab(tab: Tab): void {
    this.tabs = this.tabs.filter(t => t.id != tab.id);
  }
}
