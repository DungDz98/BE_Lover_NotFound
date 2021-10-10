import { Category } from "../../model/category/category";
import { User } from "../user/user";

export interface IUserService {
  id?: number;
  user?: User;
  category?: Category;
  price?: number;
}
