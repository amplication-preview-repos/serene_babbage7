import { Cart } from "../cart/Cart";
import { Order } from "../order/Order";

export type Product = {
  carts?: Array<Cart>;
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  orders?: Array<Order>;
  price: number | null;
  stockQuantity: number | null;
  updatedAt: Date;
};
