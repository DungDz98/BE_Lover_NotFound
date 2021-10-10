import {User} from "./User";
import {Category} from "./category/category";

export interface Rent {
  id?:number;
  user?: User;
  userRent?: User;
  rentDate?: Date;
  startTime?:Date;
  totalMoney?:number;
  time?: number;
  status?: number;
  services?: Category[];
  feedback?: string;
}
