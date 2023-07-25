import { ClientAddress, ClientBillingContact } from "@globallypaid/sdk";
export interface BaseTokenResponse {
    token: string;
    tokenExToken?: string;
    pan?: string;
    brand: string;
    lastFour: string;
    expiration: string;
    cvv?: string;
    billingContact: ClientBillingContact;
    shippingAddress?: ClientAddress;
    kountSessionId?: string;
}
