import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    findAll(paginationQuery: any): Promise<(import("./entities/user.entity").User & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findOne(userId: string): Promise<import("./entities/user.entity").User & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    create(createUserDto: CreateUserDto): Promise<import("./entities/user.entity").User & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<import("./entities/user.entity").User & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
