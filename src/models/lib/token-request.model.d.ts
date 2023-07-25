import { PaymentInstrument } from './payment-instrument.model';
export interface TokenRequestModel {
    payment_instrument: PaymentInstrument;
    kount_session_id?: string;
}
