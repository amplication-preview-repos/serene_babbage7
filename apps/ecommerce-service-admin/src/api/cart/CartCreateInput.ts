import { CheckoutCreateNestedManyWithoutCartsInput } from "./CheckoutCreateNestedManyWithoutCartsInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type CartCreateInput = {
  checkouts?: CheckoutCreateNestedManyWithoutCartsInput;
  customer?: CustomerWhereUniqueInput | null;
  product?: ProductWhereUniqueInput | null;
  quantity?: number | null;
};
