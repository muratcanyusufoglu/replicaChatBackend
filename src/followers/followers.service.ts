import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Number } from 'mongoose';
import { CreateFollowDto } from './dto/create-followers.dto';
import { Follow } from './entities/followers.entity';

import { Configuration, OpenAIApi } from 'openai';

@Injectable()
export class FollowService {
  constructor(
    @InjectModel(Follow.name)
    private readonly followModule: Model<Follow>,
  ) {}

  findAll() {
    return this.followModule.find().exec();
  }

  async findOne(id: string) {
    const followerInfo = await this.followModule
      .find({
        followerId: id, // where id is your column name
      })
      .exec();
    if (!followerInfo) {
      //throw new HttpException(`followerInfo #${id} not found`, HttpStatus.NOT_FOUND);
      throw new NotFoundException(`followerInfo #${id} not found`);
    }
    return followerInfo;
  }


  create(createFollowDto: CreateFollowDto) {
    const image = new this.followModule(createFollowDto);
    return image.save();
  }
}
