declare class MessageInfoDto {
    readonly message: string;
    readonly user: string;
    readonly response: string;
    readonly date: string;
}
export declare class CreateMessageDto {
    readonly user: string;
    readonly messageInfo: MessageInfoDto;
}
export {};
