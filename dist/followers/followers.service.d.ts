import { Model } from 'mongoose';
import { CreateFollowDto } from './dto/create-followers.dto';
import { Follow } from './entities/followers.entity';
import { UpdateFollowersDto } from './dto/update-followers.dto';
export declare class FollowService {
    private readonly followModule;
    constructor(followModule: Model<Follow>);
    findAll(): Promise<(Follow & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findOne(id: string): Promise<any[]>;
    findOneAllInfo(id: string): Promise<(Follow & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findOneIdes(followId: string, followerId: string): Promise<Follow & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(id: string, updateFollowersDto: UpdateFollowersDto): Promise<Follow & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    addFollowingId(followerId: string, updateFollowersDto: UpdateFollowersDto): Promise<Follow & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    create(createFollowDto: CreateFollowDto): Promise<Follow & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    remove(followId: string, followerId: string): Promise<any>;
}
