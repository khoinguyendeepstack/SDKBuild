import { FrameCommunicatorService } from './frame-communicator.service';
import { ConfigurationService } from './configuration.service';
import { ContinueCCAMessage, FormEvent, GpgTokenResponse, Message, MessageType } from '../../models';
import { LoggerService } from './logger.service';
import { StartBinProcessMessage } from '../../models/lib/cardinal/start-bin-message.model';
export declare abstract class FrameEventHandlers {
    private formEventMap;
    protected frameCommunicator: FrameCommunicatorService;
    protected configurationService: ConfigurationService;
    protected log: LoggerService;
    protected constructor(formEventMap: any);
    getFormEventByMessageType(messageType: MessageType): FormEvent;
    resetForm(frame: HTMLIFrameElement, message: Message<boolean>): void;
    abstract createTokenHandler(frame: HTMLIFrameElement, message: Message<any>): any;
    abstract receivePANPayload(frame: HTMLIFrameElement, message: Message<any>): any;
    abstract receiveAliasAndShippingAddress(frame: HTMLIFrameElement, message: Message<GpgTokenResponse>): GpgTokenResponse;
    abstract formLoaded(frame: HTMLIFrameElement, message: Message<boolean>): boolean;
    abstract formSubmit(frame: HTMLIFrameElement, message: Message<boolean>): boolean;
    abstract formResponse(frame: HTMLIFrameElement, message: Message<any>): any;
    abstract initSongbird(frame: HTMLIFrameElement, message: Message<string>): any;
    abstract startBinProcess(frame: HTMLIFrameElement, message: Message<StartBinProcessMessage>): any;
    abstract continueCCA(frame: HTMLIFrameElement, message: Message<ContinueCCAMessage>): any;
}
