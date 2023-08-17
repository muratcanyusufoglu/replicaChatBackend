import { Model } from 'mongoose';
import { CreateLastMessageDto } from './dto/create-message.dto';
import { LastMessages } from './entities/lastmessages.entity';
export declare class LastMessageService {
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
    update(userId: string, whom: string, updateMessageDto: CreateLastMessageDto): Promise<LastMessages & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    create(createMessageDto: CreateLastMessageDto): Promise<LastMessages & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
