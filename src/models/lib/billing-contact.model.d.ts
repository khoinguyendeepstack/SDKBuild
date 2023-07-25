import { Address } from './address.model';
export interface BillingContact {
    first_name?: string;
    last_name?: string;
    address?: Address;
    phone?: string;
    email?: string;
}
