import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
export declare class UserService {
    private readonly userModule;
    constructor(userModule: Model<User>);
    findAll(): Promise<(User & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findOne(userId: string): Promise<User & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<User & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    create(createUserDto: CreateUserDto): Promise<User & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
