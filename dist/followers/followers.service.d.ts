import { Model } from 'mongoose';
import { CreateFollowDto } from './dto/create-followers.dto';
import { Follow } from './entities/followers.entity';
export declare class FollowService {
    private readonly followModule;
    constructor(followModule: Model<Follow>);
    findAll(): Promise<(Follow & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findOne(id: string): Promise<Follow & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    create(createFollowDto: CreateFollowDto): Promise<Follow & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
