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
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
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
