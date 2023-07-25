import { Subject } from 'rxjs';
import { Message } from '../../models';
export declare class FrameCommunicatorService {
    private static instance;
    private configurationService;
    private log;
    readonly notifier$: Subject<Message<any>>;
    private constructor();
    static getInstance(): FrameCommunicatorService;
    private frameMessageListener;
    sendMessageToFrame<T>(frame: HTMLIFrameElement, message: Message<T>): void;
}
