export class SignUpForm {
  private userName?: string;
  private password?: string;
  private email?: string;
  private phoneNumber?: string;
  private roles?: string[];
  constructor( userName: string, password: string, email: string, phoneNumber: string) {
    this.userName = userName;
    this.password = password;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.roles = ['ROLE_USER'];
  }
}
