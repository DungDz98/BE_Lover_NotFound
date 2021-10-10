import { Category } from "../category/category";
import { User } from "../user/user";

export interface IuserService {
  id?: number;
  user?: User;
  service?: Category;
  price?: number;
}
