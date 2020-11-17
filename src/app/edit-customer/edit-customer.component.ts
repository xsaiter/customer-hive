import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Customer } from '../core/models/customer.model';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  constructor() { }

  customer: Customer = new Customer();

  ngOnInit(): void {
  }

  @Output() saveEvent: EventEmitter<Customer> = new EventEmitter<Customer>();

  onSave(): void {
    this.saveEvent.emit();
  }
}
