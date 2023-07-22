import { Model } from 'mongoose';
import { CreateMessageDto } from './dto/create-message.dto';
import { Messages } from './entities/messages.entity';
export declare class MessageService {
    private readonly messageModel;
    constructor(messageModel: Model<Messages>);
    findAll(): Promise<(Messages & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findOne(id: string): Promise<Messages & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findPersonalChat(userId: string, whom: string): Promise<(Messages & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    getOpenAI(whom: string, question: string): Promise<any>;
    create(createMessageDto: CreateMessageDto): Promise<Messages & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
