import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Number } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';


@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private readonly userModule: Model<User>,
  ) {}

  findAll() {
    return this.userModule.find().exec();
  }

  async findOne(userId: string) {
    const user = await this.userModule
      .findOne({
        userId: userId, // where id is your column name
      })
      .exec();
    if (!user) {
      //throw new HttpException(`user #${id} not found`, HttpStatus.NOT_FOUND);
      throw new NotFoundException(`user #${userId} not found`);
    }
    return user;
  }

  async update(userId:string, updateUserDto: UpdateUserDto){
    const existingDalle = await this.userModule
    .findOneAndUpdate({ userId: userId},  {$set: updateUserDto}, {new:true})
    .exec();

    if(!existingDalle){
      throw new NotFoundException(`Image ${userId} not found`)
    }
    return existingDalle;
  
}


  create(createUserDto: CreateUserDto) {
    const image = new this.userModule(createUserDto);
    return image.save();
  }
}
