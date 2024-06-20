import { Cart } from "../cart/Cart";
import { Order } from "../order/Order";

export type Customer = {
  address: string | null;
  carts?: Array<Cart>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  orders?: Array<Order>;
  updatedAt: Date;
};
