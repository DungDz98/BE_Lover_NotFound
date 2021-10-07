export class User {
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


  constructor(id: number, userName: string, password: string, email: string, phoneNumber: string, name: string, dateOfBirth: Date, gender: string, city: string, nationality: string, avatar: string, height: string, weight: string, hobby: string, description: string, requestToPayer: string, linkFb: string, createAt: Date, createAtCCDV: Date, statusCCDV: number, statusUs: number, price: number, roles: any) {
    this.id = id;
    this.userName = userName;
    this.password = password;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.name = name;
    this.dateOfBirth = dateOfBirth;
    this.gender = gender;
    this.city = city;
    this.nationality = nationality;
    this.avatar = avatar;
    this.height = height;
    this.weight = weight;
    this.hobby = hobby;
    this.description = description;
    this.requestToPayer = requestToPayer;
    this.linkFb = linkFb;
    this.createAt = createAt;
    this.createAtCCDV = createAtCCDV;
    this.statusCCDV = statusCCDV;
    this.statusUs = statusUs;
    this.price = price;
    this.roles = roles;
  }

}
