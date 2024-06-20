import { Checkout } from "../checkout/Checkout";
import { Customer } from "../customer/Customer";
import { Product } from "../product/Product";

export type Cart = {
  checkouts?: Array<Checkout>;
  createdAt: Date;
  customer?: Customer | null;
  id: string;
  product?: Product | null;
  quantity: number | null;
  updatedAt: Date;
};
