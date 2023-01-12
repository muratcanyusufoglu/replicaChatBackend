import { Model } from 'mongoose';
import { CreateDalleDto } from './dto/create-dalle.dto';
import { Dalle } from './entities/dalle.entity';
export declare class DalleService {
    private readonly dalleModel;
    constructor(dalleModel: Model<Dalle>);
    findAll(): Promise<(Dalle & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findOne(id: string): Promise<Dalle & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getOpenAI(prompt: string): Promise<any>;
    create(createDalleDto: CreateDalleDto): Promise<Dalle & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
