import { Customer } from "../customer/Customer";
import { Product } from "../product/Product";

export type Order = {
  createdAt: Date;
  customer?: Customer | null;
  id: string;
  orderStatus?: "Option1" | null;
  product?: Product | null;
  quantity: number | null;
  updatedAt: Date;
};
