import { GpgConfig } from './gpg-config.model';
export interface PrivateConfiguration extends GpgConfig {
    sdkVersion?: string;
    enableKount?: boolean;
    enableApplePay?: boolean;
    globalGUID?: string;
    globalPublicKey?: string;
    tokenApiEndpoint?: string;
    formsURL?: string;
    use3ds?: boolean;
    jwt3dsToken?: string;
}
