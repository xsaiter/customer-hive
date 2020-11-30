import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Customer } from '../core/models/customer.model';
import { CustomerService } from '../core/services/customer.service';

@Component({
  selector: 'app-all-customers',
  templateUrl: './all-customers.component.html',
  styleUrls: ['./all-customers.component.css']
})
export class AllCustomersComponent implements OnInit {
  dataSource = new MatTableDataSource<Customer>();

  readonly tableColumns: string[] = ['id', 'firstName', 'lastName', 'email'];

  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.customerService
      .getAllCustomers()
      .then(data => this.dataSource.data = data);
  }
}
