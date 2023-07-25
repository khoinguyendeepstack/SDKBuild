import { PrivateConfiguration } from '../../models';
export declare class ConfigurationService {
    private static instance;
    private _configuration;
    get configuration(): PrivateConfiguration;
    set configuration(value: PrivateConfiguration);
    private constructor();
    static getInstance(): ConfigurationService;
}
