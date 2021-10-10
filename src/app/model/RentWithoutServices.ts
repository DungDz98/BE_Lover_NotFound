import {User} from "./User";
import {Category} from "./category/category";

export class RentWithoutServices {
  user?: User;
  userRent?: User;
  rentDate?: Date;
  startTime?:Date;
  totalMoney?:number;
  time?: number;
  status?: number;
  services?: String[];
  feedback?: string;
}
