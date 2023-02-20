import { Model } from 'mongoose';
import { CreateDalleDto } from './dto/create-dalle.dto';
import { Dalle } from './entities/dalle.entity';
import { UpdateDalleDto } from './dto/update-dalle.dto';
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
    update(id: string, updateDalleDto: UpdateDalleDto): Promise<Dalle & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    create(createDalleDto: CreateDalleDto): Promise<Dalle & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
