export declare const URL_CREATE_TOKEN = "token";
export declare const KOUNT_ID_SCRIPT = "KOUNT_ID_SCRIPT";
export declare const SONGBIRD_SCRIPT_ID: string;
declare global {
    interface Window {
        ka: {
            TYPE_UNDEFINED: string;
            HTTP_POST: string;
            host: string;
            sessionId: string;
            merchantId: string;
            ckprefix: string;
            cksuffix: string;
            ckendpoint: string;
        };
        Cardinal: {
            on: Function;
            setup: Function;
            configure: Function;
            continue: Function;
            start: Function;
            trigger: Function;
        };
    }
    const process: {
        env: {
            URL_TOKEN_SERVICE: string;
            URL_TOKEN_SERVICE_SANDBOX: string;
            URL_FORM: string;
            V1_URL_FORM: string;
            MODE: string;
            V1_BACKEND_URL: string;
            V1_BACKEND_URL_SANDBOX: string;
            SDK_VERSION: string;
        };
    };
}
