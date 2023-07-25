import { FrameEventHandlers } from '../common/frame-event-handlers.interface';
import { BaseTokenResponse, ContinueCCAMessage, GpgTokenResponse, Message, TokenDetailsV1 } from '../../models';
export declare class FrameEventHandlersV1 extends FrameEventHandlers {
    constructor();
    createTokenHandler(frame: HTMLIFrameElement, message: Message<TokenDetailsV1>): TokenDetailsV1;
    receivePANPayload(frame: HTMLIFrameElement, message: Message<TokenDetailsV1>): TokenDetailsV1;
    receiveAliasAndShippingAddress(frame: HTMLIFrameElement, message: Message<GpgTokenResponse>): GpgTokenResponse;
    formLoaded(frame: HTMLIFrameElement, message: Message<boolean>): boolean;
    formSubmit(frame: HTMLIFrameElement, message: Message<boolean>): boolean;
    formResponse(frame: HTMLIFrameElement, message: Message<BaseTokenResponse>): BaseTokenResponse;
    initSongbird(frame: HTMLIFrameElement, message: Message<any>): void;
    startCCA(frame: HTMLIFrameElement, message: Message<any>): void;
    startBinProcess(frame: HTMLIFrameElement, message: Message<any>): void;
    continueCCA(frame: HTMLIFrameElement, message: Message<ContinueCCAMessage>): void;
}
