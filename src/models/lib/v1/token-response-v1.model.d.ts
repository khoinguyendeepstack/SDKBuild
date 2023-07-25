export interface TokenResponseV1 {
    Result: string;
    ResponseCode: string;
    ProfileDetail: TokenDetailsV1;
}
export interface TokenDetailsV1 {
    Token: string;
    EmployeeID: string;
    CCLastFour: string;
    CCFirstFour: string;
    CCBrand: string;
    ExpirationDate: string;
    FirstName: string;
    LastName: string;
    Address1: string;
    Address2: string;
    City: string;
    State: string;
    PostalCode: string;
    Country: string;
    Phone?: any;
    Email?: any;
    Cvv?: any;
    PAN?: string;
    KountSessionId?: string;
}
