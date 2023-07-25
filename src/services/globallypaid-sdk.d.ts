import { FrameOptions, GpgTokenResponse, FormType } from '../models';
import { PublicFormSDK } from '../interfaces';
export declare class DeepStackSDK {
    private publishableKey;
    private configurationService;
    constructor(publishableKey: string);
    createToken(ccNumber: string, cvv: string, expiration: string, zipCode: string): Promise<GpgTokenResponse>;
    createForm(elementType: FormType, options?: FrameOptions): PublicFormSDK;
    private configureSDK;
}
