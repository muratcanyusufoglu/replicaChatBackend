import { Model } from 'mongoose';
import { CreateMessageDto } from './dto/create-message.dto';
import { Messages } from './entities/messages.entity';
export declare class MessageService {
    private readonly messageModel;
    constructor(messageModel: Model<Messages>);
    findAll(): Promise<any[]>;
    findOne(id: string): Promise<any>;
    getOpenAI(question: string): Promise<any>;
    create(createMessageDto: CreateMessageDto): any;
}
