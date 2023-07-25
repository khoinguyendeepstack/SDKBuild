import { TokenDetailsV1, TokenRequestV1 } from '../../models';
import { ConfigurationService } from '../common/configuration.service';
export declare class TokenV1Service {
    static configurationService: ConfigurationService;
    static tokenize(tokenPayload: Partial<TokenRequestV1>): Promise<TokenDetailsV1>;
    private static encryptCCNumber;
}
