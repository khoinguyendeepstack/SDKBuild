import { ClientAddress, ClientBillingContact, ClientOrderDetails, FormEvent, PaymentSource } from '../models';
export interface PublicFormSDK {
    /**
     * Mounts a form to the given container id
     *
     * @example
     * form.mount('myDiv');
     *
     * @param containerId
     */
    mount(containerId: string): void;
    /**
     * Programmatically submit the form
     */
    submit(): void;
    /**
     * Set billing contact data in the form (even in card-simple)
     *
     * @param billingContact
     */
    setBillingContact(billingContact: ClientBillingContact): void;
    /**
     * Set shipping address
     * @param shippingAddress Shipping address
     */
    setShippingAddress?(shippingAddress: ClientAddress): void;
    /**
     * Set order details. amount and currency are required for 3DS
     * @param orderDetails
     */
    setOrderDetails(orderDetails: ClientOrderDetails): void;
    /**
     * Set payment source for this transaction
     * @param paymentSource The payment source object
     */
    setPaymentSource(paymentSource: PaymentSource): void;
    /**
     * Make submit button disabled and shows loading spinner on it
     */
    showSpinner(): void;
    /**
     * Show error under the submit button of a form
     *
     * @param message
     */
    showError(message: string): void;
    /**
     * Hides the form and shows success checkmark
     *
     */
    showSuccess(): void;
    /**
     * Resets the form with the initial state.
     * FORM_INITIALIZED event will fire again.
     */
    resetForm(): void;
    /**
     * Removes form from the DOM
     */
    unmount(): void;
    /**
     * Subscribe to a form event
     *
     * @param eventName
     * @param callback
     * @param errorCallback
     */
    on(eventName: FormEvent, callback: (answer?: any) => void, errorCallback?: (error?: any) => void): void;
}
export declare const obfuscatePublicFormSDKObject: (context: PublicFormSDK) => PublicFormSDK;
