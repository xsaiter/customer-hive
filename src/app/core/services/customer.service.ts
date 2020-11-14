import { Injectable } from '@angular/core';
import { Customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private _customers: Array<Customer> = [];

  constructor() { }

  addCustomer(customer: Customer): void {
    this._customers.push(customer);
  }

  getAllCustomers(): Promise<Customer[]> {
    return Promise.resolve(this._customers);
  }
}
