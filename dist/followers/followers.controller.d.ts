import { FollowService } from './followers.service';
import { CreateFollowDto } from './dto/create-followers.dto';
import { UpdateFollowersDto } from './dto/update-followers.dto';
export declare class FollowController {
    private readonly followService;
    constructor(followService: FollowService);
    findAll(paginationQuery: any): Promise<(import("./entities/followers.entity").Follow & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findOne(followerId: string): Promise<any[]>;
    findOneAllInfo(followerId: string): Promise<(import("./entities/followers.entity").Follow & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    create(createFollowDto: CreateFollowDto): Promise<import("./entities/followers.entity").Follow & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(id: string, updateFollowersDto: UpdateFollowersDto): Promise<import("./entities/followers.entity").Follow & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    addFollowingId(followerId: string, updateFollowersDto: UpdateFollowersDto): Promise<import("./entities/followers.entity").Follow & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    remove(followId: string, followerId: string): Promise<any>;
}
