export class Customer {
  id: number;
  firstName: string;
  lastName: string;
  email: string;

  isValid(): boolean {
    return Customer.isValidEmail(this.email);
  }

  static isValidEmail(email: string): boolean {
    return true;
  }
}
