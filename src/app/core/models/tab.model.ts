export enum TabTypes {
  editCustomer,
  allCustomers
}

export abstract class Tab {
  id: number;
  name: string;

  abstract getType(): TabTypes;

  isEditCustomer(): boolean {
    return this.getType() === TabTypes.editCustomer;
  }

  isAllCustomer(): boolean {
    return this.getType() === TabTypes.allCustomers;
  }

  title(): string {
    return `${this.name} (${this.id})`;
  }

  static createEditCustomer() {
    return new EditCustomerTab();
  }

  static createAllCustomers() {
    return new AllCustomersTab();
  }
}

export class EditCustomerTab extends Tab {
  getType(): TabTypes {
    return TabTypes.editCustomer;
  }
}

export class AllCustomersTab extends Tab {
  getType(): TabTypes {
    return TabTypes.allCustomers;
  }
}
