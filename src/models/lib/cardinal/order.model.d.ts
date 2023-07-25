import { CartItem } from "./cart-item.model";
import { Consumer } from "./consumer.model";
import { Options } from "./options.model";
import { OrderDetails } from "./order-details.model";
import { Token } from "./token.model";
export interface Order {
    Cart?: Array<CartItem>;
    Consumer?: Consumer;
    Options?: Options;
    OrderDetails?: OrderDetails;
    Token?: Token;
}
