import { Model } from 'mongoose';
import { CreateDalleDto } from './dto/create-dalle.dto';
import { Dalle } from './entities/dalle.entity';
import { UpdateDalleDto } from './dto/update-dalle.dto';
import { PaginationQueryDto } from './dto/pagination-query.dto';
export declare class DalleService {
    private readonly dalleModel;
    httpService: any;
    constructor(dalleModel: Model<Dalle>);
    findAll(): Promise<(Dalle & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findOne(id: string): Promise<Dalle & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findFromUserId(userId: string): Promise<(Dalle & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findFromUserIds(userIds: string, paginationQuery: PaginationQueryDto): Promise<(Dalle & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    download(imageUrl: string): Promise<void>;
    getOpenAI(prompt: string): Promise<any>;
    update(id: string, updateDalleDto: UpdateDalleDto): Promise<Dalle & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    create(createDalleDto: CreateDalleDto): Promise<Dalle & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
