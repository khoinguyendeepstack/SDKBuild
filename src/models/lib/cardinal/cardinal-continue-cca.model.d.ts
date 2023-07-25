import { CardinalContinueRequest } from "./cardinal-continue-request.model";
import { Order } from "./order.model";
export interface ContinueCCAMessage {
    continueRequest: CardinalContinueRequest;
    order: Order;
}
