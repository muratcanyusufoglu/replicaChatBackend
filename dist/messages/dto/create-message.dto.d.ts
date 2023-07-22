declare class MessageArray {
    readonly message: string;
    readonly response: string;
    readonly date: string;
}
export declare class CreateMessageDto {
    readonly userId: string;
    readonly userPhoto: string;
    readonly whom: string;
    readonly messageArray: MessageArray[];
}
export {};
