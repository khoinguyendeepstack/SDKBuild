import { FrameEventHandlers } from '../common/frame-event-handlers.interface';
import { BaseTokenResponse, ContinueCCAMessage, GpgTokenResponse, Message } from '../../models';
import { StartBinProcessMessage } from '../../models/lib/cardinal/start-bin-message.model';
export declare class FrameEventHandlersV2 extends FrameEventHandlers {
    constructor();
    createTokenHandler(frame: HTMLIFrameElement, message: Message<GpgTokenResponse>): GpgTokenResponse;
    receivePANPayload(frame: HTMLIFrameElement, message: Message<GpgTokenResponse>): GpgTokenResponse;
    receiveAliasAndShippingAddress(frame: HTMLIFrameElement, message: Message<GpgTokenResponse>): GpgTokenResponse;
    formLoaded(frame: HTMLIFrameElement, message: Message<boolean>): boolean;
    formSubmit(frame: HTMLIFrameElement, message: Message<boolean>): boolean;
    formResponse(frame: HTMLIFrameElement, message: Message<BaseTokenResponse>): BaseTokenResponse;
    initSongbird(frame: HTMLIFrameElement, message: Message<string>): void;
    startCCA(frame: HTMLIFrameElement, message: Message<any>): void;
    startBinProcess(frame: HTMLIFrameElement, message: Message<StartBinProcessMessage>): void;
    continueCCA(frame: HTMLIFrameElement, message: Message<ContinueCCAMessage>): void;
}
