export interface TokenRequestV1 {
    Payload: string;
    FirstName: string;
    LastName: string;
    Phone: string;
    Email: string;
    Address1: string;
    Address2: string;
    PostalCode: string;
    City: string;
    State: string;
    Country: string;
    EmployeeID?: string;
    CVV: string;
    Expiration: string;
    CCToken?: any;
    KountSessionID?: string;
}
