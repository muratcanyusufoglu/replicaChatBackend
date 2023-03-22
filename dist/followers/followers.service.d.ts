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
