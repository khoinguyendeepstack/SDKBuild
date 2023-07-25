import { FormType, FrameOptions, TokenDetailsV1, TokenRequestV1 } from '../models';
import { PublicFormSDK } from '../interfaces';
export declare class GPGSDK {
    private publishableKey;
    private configurationService;
    constructor(publishableKey: string);
    createToken(payload: Partial<TokenRequestV1>): Promise<TokenDetailsV1>;
    createForm(elementType: FormType, options?: FrameOptions): PublicFormSDK;
}
