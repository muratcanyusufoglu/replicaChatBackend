import { DalleService } from './dalle.service';
import { CreateDalleDto } from './dto/create-dalle.dto';
import { UpdateDalleDto } from './dto/update-dalle.dto';
export declare class DalleController {
    private readonly dalleService;
    constructor(dalleService: DalleService);
    findAll(paginationQuery: any): Promise<(import("./entities/dalle.entity").Dalle & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    getOpenAI(question: string): Promise<any>;
    create(createDalleDto: CreateDalleDto): Promise<import("./entities/dalle.entity").Dalle & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(id: string, updateDalleDto: UpdateDalleDto): Promise<import("./entities/dalle.entity").Dalle & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
