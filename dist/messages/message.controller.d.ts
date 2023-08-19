import { MessageService } from './message.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { UserCheckDto } from './dto/user-check.dto';
export declare class MessageController {
    private readonly messageService;
    constructor(messageService: MessageService);
    findAll(paginationQuery: any): Promise<(import("./entities/messages.entity").Messages & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    getOpenAIAnswer(userCheckDto: UserCheckDto): Promise<any>;
    getOpenAIForNotification(whom: string, userId: string, userPhoto: string, date: string, response: string): Promise<any>;
    findPersonalChat(userId: string, whom: string): Promise<(import("./entities/messages.entity").Messages & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    create(createMessageDto: CreateMessageDto): Promise<import("./entities/messages.entity").Messages & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
