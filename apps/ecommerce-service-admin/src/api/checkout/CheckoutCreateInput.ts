import { CartWhereUniqueInput } from "../cart/CartWhereUniqueInput";

export type CheckoutCreateInput = {
  cart?: CartWhereUniqueInput | null;
  paymentStatus?: "Option1" | null;
  totalAmount?: number | null;
};
