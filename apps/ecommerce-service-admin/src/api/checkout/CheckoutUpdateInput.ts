import { CartWhereUniqueInput } from "../cart/CartWhereUniqueInput";

export type CheckoutUpdateInput = {
  cart?: CartWhereUniqueInput | null;
  paymentStatus?: "Option1" | null;
  totalAmount?: number | null;
};
