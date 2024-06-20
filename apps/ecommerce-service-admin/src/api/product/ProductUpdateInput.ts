import { CartUpdateManyWithoutProductsInput } from "./CartUpdateManyWithoutProductsInput";
import { OrderUpdateManyWithoutProductsInput } from "./OrderUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  carts?: CartUpdateManyWithoutProductsInput;
  description?: string | null;
  name?: string | null;
  orders?: OrderUpdateManyWithoutProductsInput;
  price?: number | null;
  stockQuantity?: number | null;
};
