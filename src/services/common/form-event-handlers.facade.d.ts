import { ApiVersion, FormEvent, Message, MessageType } from '../../models';
export declare class FormEventHandlersFacade {
    private frameEventHandlers;
    private log;
    private messageHandlers;
    constructor(apiVersion?: ApiVersion);
    private initializeHandlers;
    getFormEvent(messageType: MessageType): FormEvent;
    handleMessage: (frame: HTMLIFrameElement, message: Message<any>) => Promise<any>;
}
