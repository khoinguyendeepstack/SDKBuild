import { GpgTokenResponse, TokenRequestModel } from '../../models';
export declare class TokenService {
    private static configuration;
    private static addKountSessionId;
    static buildSimpleTokenRequest(ccNumber: string, cvv: string, expiration: string, zipCode: string): TokenRequestModel;
    static tokenize(tokenRequestModel: TokenRequestModel): Promise<GpgTokenResponse>;
}
