import { ConfigurationService } from './configuration.service';
import { Message, Order, CardinalContinueRequest } from '../../models';
import { FrameCommunicatorService } from './frame-communicator.service';
import { LoggerService } from './logger.service';
import { StartBinProcessMessage } from '../../models/lib/cardinal/start-bin-message.model';
export declare class ExternalService {
    static configurationService: ConfigurationService;
    static frameCommunicator: FrameCommunicatorService;
    static log: LoggerService;
    static injectKount(): void;
    static removeKount(): void;
    static checkKount(): void;
    static updateExternalServiceProviders(): void;
    static getKountSessionID(): string | null;
    static injectSongbird(): void;
    static initSongbird(frame: HTMLIFrameElement, message: Message<any>): void;
    static startBinProcess(data: StartBinProcessMessage): Promise<any>;
    static continueCCA(continueRequest: CardinalContinueRequest, order: Order): void;
    static startCCA(orderObject: Order): void;
}
