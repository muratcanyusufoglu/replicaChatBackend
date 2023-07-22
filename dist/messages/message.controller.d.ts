import { MessageService } from './message.service';
import { CreateMessageDto } from './dto/create-message.dto';
export declare class MessageController {
    private readonly messageService;
    constructor(messageService: MessageService);
    findAll(paginationQuery: any): Promise<(import("./entities/messages.entity").Messages & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    getOpenAI(whom: string, question: string): Promise<any>;
    findPersonalChat(userId: string, whom: string): Promise<(import("./entities/messages.entity").Messages & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    create(createMessageDto: CreateMessageDto): Promise<import("./entities/messages.entity").Messages & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
