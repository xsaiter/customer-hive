import { Injectable } from '@angular/core';
import { Customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private customers: Array<Customer> = [];
  private lastId: number;

  constructor() {
  }

  saveCustomer(customer: Customer): number {
    if (customer.id > 0) {
      let existingCustomer = this.customers.find(x => x.id == customer.id);
      existingCustomer.email = customer.email;
      existingCustomer.firstName = customer.firstName;
      existingCustomer.lastName = customer.lastName;
    } else {
      this.customers.push(customer);
      this.lastId++;
      customer.id = this.lastId;
    }
    return customer.id;
  }

  getAllCustomers(): Promise<Customer[]> {
    return Promise.resolve(this.customers);
  }
}
