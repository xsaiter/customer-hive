export class Tab {
  id: number;
  type: TabTypes;
  name: string;

  isEditCustomer(): boolean {
    return this.type === TabTypes.editCustomer;
  }

  isAllCustomer(): boolean {
    return this.type === TabTypes.allCustomer;
  }

  title(): string {
    return `${this.name} (${this.id})`;
  }
}

export enum TabTypes {
  editCustomer,
  allCustomer
}
