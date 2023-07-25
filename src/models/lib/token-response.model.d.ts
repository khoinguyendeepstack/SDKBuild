import { BillingContact } from './billing-contact.model';
import { Address } from './address.model';
export interface GpgTokenResponse {
    id: string;
    type: string;
    brand: string;
    bin: string;
    last_four: string;
    expiration: string;
    cvv?: string;
    billing_contact: BillingContact;
    created: Date;
    updated: Date;
    shippingAddress?: Address;
}
