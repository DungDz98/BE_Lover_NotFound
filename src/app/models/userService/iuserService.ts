import { Category } from "../../model/category/category";
import { User } from "../user/user";

export interface IuserService {
  id?: number;
  user?: User;
  category?: Category;
  price?: number;
}
