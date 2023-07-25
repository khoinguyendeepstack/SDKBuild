export interface FrameOptions {
    style?: FrameStyle;
    common?: FrameCommonOptions;
}
export interface FrameStyle {
    base?: {
        width?: string;
        height?: string;
        fontFamily?: string;
        fontSize?: string;
        inputColor?: string;
        color?: string;
        border?: string;
        background?: string;
        buttonBackground?: string;
        buttonColor?: string;
        labelsColor?: string;
        linksColor?: string;
        headerAndBorderBackgroundColor?: string;
        headerBackColor?: string;
        headerLabelColor?: string;
    };
    invalid?: {
        color?: string;
    };
}
export interface FrameCommonOptions {
    preventImmediateSubmit: boolean;
    requires3ds?: boolean;
    clientCustomerId?: string;
}
