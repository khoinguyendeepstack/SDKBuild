import { MessageType, ToFrameMessageType } from './enums';
export interface Message<T> {
    type: MessageType | ToFrameMessageType;
    message: T;
    success?: boolean;
    frameUUID: string;
}
