import { EnvironmentType } from '../models';
export declare class GeneralUtil {
    static uuidv4(): string;
    static getSdkVersion(): string;
    static getAuthorizationHeader(publishableKey: string): object;
    static getEnvironmentType(publishableKey: string): EnvironmentType;
    static getTokenEndpointUrl(publishableKey: string): string;
    static getTokenEndpointUrlV1(publishableKey: string): string;
    static getFormsURL(): string;
    static getV1FormsURL(): string;
}
