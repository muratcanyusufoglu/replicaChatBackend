/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
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
