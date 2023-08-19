import { Model } from 'mongoose';
import { CreateMessageDto } from './dto/create-message.dto';
import { Messages } from './entities/messages.entity';
import { UserService } from 'src/user/user.service';
import { UserCheckDto } from './dto/user-check.dto';
import { LastMessageService } from 'src/lastMessages/message.service';
export declare class MessageService {
    private readonly messageModel;
    private readonly userService;
    private readonly lastMessageService;
    constructor(messageModel: Model<Messages>, userService: UserService, lastMessageService: LastMessageService);
    findAll(): Promise<(Messages & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findOne(id: string): Promise<Messages & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findPersonalChat(userId: string, whom: string): Promise<(Messages & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    getOpenAIAnswer(userCheckDto: UserCheckDto): Promise<any>;
    getOpenAIForNotification(whom: string, userId: string, userPhoto: string, date: string, response: string): Promise<any>;
    create(createMessageDto: CreateMessageDto): Promise<Messages & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
