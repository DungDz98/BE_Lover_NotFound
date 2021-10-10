
import { User } from "../user/user";
import {Category} from "../../model/category/category";

export interface IuserService {
  id?: number;
  user?: User;
  category?: Category;
  price?: number;
}
