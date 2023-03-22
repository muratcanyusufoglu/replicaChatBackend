import { DalleService } from './dalle.service';
import { CreateDalleDto } from './dto/create-dalle.dto';
import { UpdateDalleDto } from './dto/update-dalle.dto';
export declare class DalleController {
    private readonly dalleService;
    httpService: any;
    constructor(dalleService: DalleService);
    findAll(paginationQuery: any): Promise<(import("./entities/dalle.entity").Dalle & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    getOpenAI(question: string): Promise<any>;
    findFromUserId(userId: string): Promise<(import("./entities/dalle.entity").Dalle & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findFromUserIds(userIds: string): Promise<(import("./entities/dalle.entity").Dalle & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    download(imageUrl: string): Promise<void>;
    create(createDalleDto: CreateDalleDto): Promise<import("./entities/dalle.entity").Dalle & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(id: string, updateDalleDto: UpdateDalleDto): Promise<import("./entities/dalle.entity").Dalle & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
