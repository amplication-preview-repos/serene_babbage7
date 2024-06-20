import { SortOrder } from "../../util/SortOrder";

export type CheckoutOrderByInput = {
  cartId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  paymentStatus?: SortOrder;
  totalAmount?: SortOrder;
  updatedAt?: SortOrder;
};
