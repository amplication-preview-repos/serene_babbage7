import { CartWhereUniqueInput } from "../cart/CartWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type CheckoutWhereInput = {
  cart?: CartWhereUniqueInput;
  id?: StringFilter;
  paymentStatus?: "Option1";
  totalAmount?: FloatNullableFilter;
};
