export interface User {
  id?: number;
  userName?: string;
  password?: string;
  email?: string;
  phoneNumber?: string;
  name?: string;
  dateOfBirth: Date;
  gender?: string;
  city?: string;
  nationality?: string;
  avatar?: string;
  height?: string;
  weight?: string;
  hobby?: string;
  description?: string;
  requestToPayer?: string;
  linkFb?: string;
  createAt: Date;
  createAtCCDV: Date;
  statusCCDV?: number;
  statusUs?: number;
  price?: number;
  roles?: any;
}
