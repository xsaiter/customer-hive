import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer.model';

interface Pot {
  x: number;
  y: number;
}

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private customers: Array<Customer> = [];

  constructor() {
    let a = new Customer();
    a.id = 10;
    a.firstName = "A firstName";
    a.lastName = "A lastName";
    a.email = "A email";
    this.customers.push(a);

    let b = new Customer();
    b.id = 20;
    b.firstName = "B firstName";
    b.lastName = "B lastName";
    b.email = "B email";
    this.customers.push(b);
  }

  saveCustomer(customer: Customer): void {
    this.customers.push(customer);
  }

  getAllCustomers(): Promise<Customer[]> {
    return Promise.resolve(this.customers);
  }
}
