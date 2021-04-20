import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Customer } from '../core/models/customer.model';
import { EditCustomerTab, Tab } from '../core/models/tab.model';
import { CustomerService } from '../core/services/customer.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  constructor(private customService: CustomerService) { }

  @Input() tab: Tab;
  @Output() saveEvent: EventEmitter<Customer> = new EventEmitter<Customer>();

  ngOnInit(): void { }

  customer(): Customer {
    return (<EditCustomerTab>this.tab).getCustomer();
  }

  onSave(): void {
    this.customService.saveCustomer(this.customer());
    this.saveEvent.emit(this.customer());
  }
}
