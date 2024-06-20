import { Cart } from "../cart/Cart";

export type Checkout = {
  cart?: Cart | null;
  createdAt: Date;
  id: string;
  paymentStatus?: "Option1" | null;
  totalAmount: number | null;
  updatedAt: Date;
};
