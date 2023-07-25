export declare class LoggerService {
    private configurationService;
    private static logger;
    constructor();
    static getInstance(): LoggerService;
    isEnabled(): boolean;
    private isStringy;
    private _log;
    debug(message: any): void;
    info(message: any): void;
    warn(message: any): void;
    error(message: any): void;
}
