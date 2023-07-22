import { Model } from 'mongoose';
import { CreateMessageDto } from './dto/create-message.dto';
import { LastMessages } from './entities/messages.entity';
export declare class MessageService {
    private readonly messageModel;
    constructor(messageModel: Model<LastMessages>);
    findAll(): Promise<(LastMessages & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findOne(id: string): Promise<LastMessages & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findPersonalChat(userId: string): Promise<(LastMessages & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    update(userId: string, whom: string, updateMessageDto: CreateMessageDto): Promise<LastMessages & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    create(createMessageDto: CreateMessageDto): Promise<LastMessages & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
