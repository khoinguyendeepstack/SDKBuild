import { ClientAddress } from "@globallypaid/sdk";
export interface ClientBillingContact {
    firstName?: string;
    lastName?: string;
    address?: ClientAddress;
    phone?: string;
    email?: string;
}
