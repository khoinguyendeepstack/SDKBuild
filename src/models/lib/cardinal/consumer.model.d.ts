import { Account } from "./account.model";
import { CardinalAddress } from "./address.model";
export interface Consumer {
    Email1?: string;
    Email2?: string;
    ShippingAddress?: CardinalAddress;
    BillingAddress?: CardinalAddress;
    Account?: Account;
}
