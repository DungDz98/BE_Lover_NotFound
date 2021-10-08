export class UserTest {
  id?: number;
  name?: String;
  avatar?: String;
  description?: String;
  category_name?: String;
  price?: number;


  constructor(id: number, name: String, avatar: String, description: String, category_name: String, price: number) {
    this.id = id;
    this.name = name;
    this.avatar = avatar;
    this.description = description;
    this.category_name = category_name;
    this.price = price;
  }
}
