import { FollowService } from './followers.service';
import { CreateFollowDto } from './dto/create-followers.dto';
export declare class FollowController {
    private readonly followService;
    constructor(followService: FollowService);
    findAll(paginationQuery: any): Promise<(import("./entities/followers.entity").Follow & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    create(createFollowDto: CreateFollowDto): Promise<import("./entities/followers.entity").Follow & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
