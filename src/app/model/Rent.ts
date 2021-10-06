import {User} from "./User";

export interface Rent {
  id?:number;
  user?: User;
  userRent?: User;
  rentDate?: Date;
  startTime?:Date;
  totalMoney?:number;
  time?: number;
  status?: number;
  service?: any;
  feedback?: string;
}
