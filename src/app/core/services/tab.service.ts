import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TabService {
  private createNewCustomerSource = new Subject<void>();
  private viewAllCustomersSource = new Subject<void>();

  constructor() { }

  createNewCustomer$ = this.createNewCustomerSource.asObservable();
  viewAllCustomers$ = this.viewAllCustomersSource.asObservable();

  createNewCustomer(): void {
    this.createNewCustomerSource.next();
  }

  viewAllCustemers(): void {
    this.viewAllCustomersSource.next();
  }
}
