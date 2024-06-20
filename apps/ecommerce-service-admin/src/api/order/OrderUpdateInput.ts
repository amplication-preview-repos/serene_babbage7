import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type OrderUpdateInput = {
  customer?: CustomerWhereUniqueInput | null;
  orderStatus?: "Option1" | null;
  product?: ProductWhereUniqueInput | null;
  quantity?: number | null;
};
