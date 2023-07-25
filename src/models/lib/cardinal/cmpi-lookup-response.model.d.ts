export interface CmpiLookupResponse {
    "ThreeDSVersion"?: string;
    "Enrolled"?: string;
    "ErrorNo"?: string;
    "ErrorDesc"?: string;
    "EciFlag"?: string;
    "OrderId"?: number;
    "TransactionId"?: string;
    "TransactionType"?: string;
    "SignatureVerification"?: string;
    "CardBrand"?: string;
    "CardBin"?: string;
    "DSTransactionId"?: string;
    "RawACSUrl"?: string;
    "ACSUrl"?: string;
    "StepUpUrl"?: string;
    "Cavv"?: string;
    "PAResStatus"?: string;
    "Payload"?: string;
    "Xid"?: string;
    "CavvAlgorithm"?: string;
    "MerchantReferenceNumber"?: string;
    "UCAFIndicator"?: string;
    "DecoupledIndicator"?: string;
    "ReasonCode"?: string;
    "ReasonDesc"?: string;
    "CardHolderInfo"?: string;
    "ACSRenderingType"?: string;
    "AuthenticationType"?: string;
    "ChallengeRequired"?: string;
    "StatusReason"?: string;
    "ACSTransactionId"?: string;
    "ThreeDSServerTransactionId"?: string;
    "SDKFlowType"?: string;
    "ACSReferenceNumber"?: string;
    "acs_opration_id"?: string;
    "ThirdPartyToken"?: string;
    "Token"?: string;
    "WhiteListStatus"?: string;
    "WhiteListStatusSource"?: string;
    "NetworkScore"?: string;
    "ExemptionData"?: string;
    "AuthorizationPayload"?: string;
    "IvrEnabledMessage"?: boolean;
    "IvrEncryptionKey"?: string;
    "IvrEncryptionMandatory"?: boolean;
    "IvrEncryptionType"?: string;
    "IvrLabel"?: string;
    "IvrPrompt"?: string;
    "IvrStatusMessage"?: string;
    "IDCI_Score"?: string;
    "IDCI_Decision"?: string;
    "IDCI_ReasonCode1"?: string;
    "IDCI_ReasonCode2"?: string;
}
