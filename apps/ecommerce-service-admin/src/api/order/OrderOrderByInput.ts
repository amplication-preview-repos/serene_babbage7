import { SortOrder } from "../../util/SortOrder";

export type OrderOrderByInput = {
  createdAt?: SortOrder;
  customerId?: SortOrder;
  id?: SortOrder;
  orderStatus?: SortOrder;
  productId?: SortOrder;
  quantity?: SortOrder;
  updatedAt?: SortOrder;
};
