import { Injectable } from '@angular/core';
import { Customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private customers: Array<Customer> = [];

  constructor() { }

  addCustomer(customer: Customer): void {
    this.customers.push(customer);
  }

  getAllCustomers(): Promise<Customer[]> {
    return Promise.resolve(this.customers);
  }
}
