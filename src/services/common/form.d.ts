import { ApiVersion, ClientAddress, ClientBillingContact, ClientOrderDetails, FormEvent, FormType, FrameOptions, PaymentSource } from '../../models';
import { PublicFormSDK } from '../../interfaces';
export declare class Form implements PublicFormSDK {
    private type;
    private options?;
    private apiVersion;
    private uuid;
    private frame;
    private frameCommunicator;
    private sdkConfiguration;
    private notifier$;
    private unsubscribe$;
    private containerId;
    private registeredEvents;
    private elementEventHandlerFacade;
    private log;
    constructor(type: FormType, options?: FrameOptions, apiVersion?: ApiVersion);
    private subscribeToFrameNotifier;
    private privateFormEventHandler;
    /**
     * Creates a subscription to the form events
     *
     * @param eventName
     * @param callback
     * @param errorCallback
     */
    on(eventName: FormEvent, callback: (answer?: any) => void, errorCallback?: (error?: any) => void): void;
    mount(containerId: string): void;
    submit(): void;
    setBillingContact(billingContact: ClientBillingContact): void;
    setShippingAddress(shippingAddress: ClientAddress): void;
    setOrderDetails(orderDetails: ClientOrderDetails): void;
    setPaymentSource(paymentSource: PaymentSource): void;
    showSpinner(): void;
    showError(message?: string): void;
    showSuccess(): void;
    resetForm(): void;
    private setFrameState;
    unmount(): void;
}
