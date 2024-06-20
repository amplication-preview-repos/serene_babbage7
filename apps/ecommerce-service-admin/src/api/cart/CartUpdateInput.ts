import { CheckoutUpdateManyWithoutCartsInput } from "./CheckoutUpdateManyWithoutCartsInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type CartUpdateInput = {
  checkouts?: CheckoutUpdateManyWithoutCartsInput;
  customer?: CustomerWhereUniqueInput | null;
  product?: ProductWhereUniqueInput | null;
  quantity?: number | null;
};
