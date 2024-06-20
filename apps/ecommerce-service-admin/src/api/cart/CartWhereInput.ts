import { CheckoutListRelationFilter } from "../checkout/CheckoutListRelationFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type CartWhereInput = {
  checkouts?: CheckoutListRelationFilter;
  customer?: CustomerWhereUniqueInput;
  id?: StringFilter;
  product?: ProductWhereUniqueInput;
  quantity?: IntNullableFilter;
};
