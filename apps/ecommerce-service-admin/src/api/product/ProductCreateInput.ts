import { CartCreateNestedManyWithoutProductsInput } from "./CartCreateNestedManyWithoutProductsInput";
import { OrderCreateNestedManyWithoutProductsInput } from "./OrderCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  carts?: CartCreateNestedManyWithoutProductsInput;
  description?: string | null;
  name?: string | null;
  orders?: OrderCreateNestedManyWithoutProductsInput;
  price?: number | null;
  stockQuantity?: number | null;
};
