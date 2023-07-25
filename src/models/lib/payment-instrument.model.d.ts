import { PaymentType } from './enums';
import { CreditCard } from './credit-card.model';
import { BillingContact } from './billing-contact.model';
export interface PaymentInstrument {
    type: PaymentType;
    creditcard: CreditCard;
    billing_contact: BillingContact;
    customer_id?: string;
    client_customer_id?: string;
}
