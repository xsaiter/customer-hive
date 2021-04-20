import { Customer } from './customer.model';

export enum TabTypes {
  editCustomer,
  allCustomers
}

export abstract class Tab {
  abstract getType(): TabTypes;

  getTitle(): string {
    return "";
  }

  isEditCustomer(): boolean {
    return this.getType() === TabTypes.editCustomer;
  }

  isAllCustomer(): boolean {
    return this.getType() === TabTypes.allCustomers;
  }

  abstract getId(): number;

  static createEditCustomer(customer: Customer) {
    return new EditCustomerTab(customer);
  }

  static createAllCustomers() {
    return new AllCustomersTab();
  }
}

export class EditCustomerTab extends Tab {
  private customer: Customer;

  constructor(customer: Customer) {
    super();
    this.customer = customer;
  }

  getType(): TabTypes {
    return TabTypes.editCustomer;
  }

  getId(): number {
    return this.customer.id;
  }

  getTitle(): string {
    if (this.getId() > 0) {
      return `create new customer`;
    } else {
      return `${this.getId()} edit customer`;
    }
  }

  getCustomer(): Customer {
    return this.customer;
  }
}

export class AllCustomersTab extends Tab {
  getType(): TabTypes {
    return TabTypes.allCustomers;
  }

  getId(): number {
    return -1;
  }

  getTitle(): string {
    return `all customers`;
  }
}
