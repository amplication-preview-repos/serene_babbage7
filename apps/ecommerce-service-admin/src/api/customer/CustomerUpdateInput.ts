import { CartUpdateManyWithoutCustomersInput } from "./CartUpdateManyWithoutCustomersInput";
import { OrderUpdateManyWithoutCustomersInput } from "./OrderUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  address?: string | null;
  carts?: CartUpdateManyWithoutCustomersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  orders?: OrderUpdateManyWithoutCustomersInput;
};
