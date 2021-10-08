import { Category } from "../category/category";
import { User } from "../user/user";

export interface UserService {
  id?: number;
  user?: User;
  service?: Category;
  price?: number;
}
