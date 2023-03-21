import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Number } from 'mongoose';
import { CreateFollowDto } from './dto/create-followers.dto';
import { Follow } from './entities/followers.entity';
import { UpdateFollowersDto } from './dto/update-followers.dto';

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

    const userIds =[];
    const followerInfo = await this.followModule
      .find({
        followerId: id, // where id is your column name
      })
      .exec();
    if (!followerInfo) {
      //throw new HttpException(`followerInfo #${id} not found`, HttpStatus.NOT_FOUND);
      throw new NotFoundException(`followerInfo #${id} not found`);
    }

    userIds.push(followerInfo.map(user => {return user.followingId}))//followerInfo.map(user => user.followingId);
    return userIds;
  }

  async findOneAllInfo(id: string) {
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

  async findOneIdes(followId: string, followerId: string) {
    const followerInfo = await this.followModule
      .findOne({
        followingId: followId,
        followerId: followerId // where id is your column name
      })
      .exec();
    if (!followerInfo) {
      //throw new HttpException(`followerInfo #${id} not found`, HttpStatus.NOT_FOUND);
      throw new NotFoundException(`followerInfo # not found`);
    }
    return followerInfo;
  }

  async update(id:string, updateFollowersDto: UpdateFollowersDto){
    const existingFollow = await this.followModule
    .findOneAndUpdate({_id: id},  {$set: updateFollowersDto}, {new:true})
    .exec();

    if(!existingFollow){
      throw new NotFoundException(`Image ${id} not found`)
    }
    return existingFollow;
  }

  async addFollowingId(followerId:string, updateFollowersDto: UpdateFollowersDto){
    const existingFollow = await this.followModule
    .findOneAndUpdate({followerId: followerId},  {$set: updateFollowersDto}, {new:true})
    .exec();

    if(!existingFollow){
      throw new NotFoundException(`Image ${followerId} not found`)
    }
    return existingFollow;
  }


  create(createFollowDto: CreateFollowDto) {
    const image = new this.followModule(createFollowDto);
    return image.save();
  }

  async remove(followId: string,followerId: string) {
    const coffee = await this.findOneIdes(followId, followerId);
    return this.followModule.remove(coffee);
  }
}
