import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateLastMessageDto } from './dto/create-message.dto';
import { LastMessages } from './entities/lastmessages.entity';

import { Configuration, OpenAIApi } from 'openai';

@Injectable()
export class LastMessageService {
  constructor(
    @InjectModel(LastMessages.name)
    private readonly messageModel: Model<LastMessages>,
  ) {}

  findAll() {
    return this.messageModel.find().exec();
  }

  async findOne(id: string) {
    const message = await this.messageModel
      .findOne({
        _id: id, // where id is your column name
      })
      .exec();
    if (!message) {
      //throw new HttpException(`message #${id} not found`, HttpStatus.NOT_FOUND);
      throw new NotFoundException(`message #${id} not found`);
    }
    return message;
  }

  async findPersonalChat(userId: string) {
    const messages = await this.messageModel
      .find({
        user: userId, // where userId is your column name
      })
      .exec();
    if (!messages) {
      //throw new HttpException(`message #${userId} not found`, HttpStatus.NOT_FOUND);
      throw new NotFoundException(`message #${userId} not found`);
    }
    return messages;
  }

  async update(
    userId: string,
    whom: string,
    updateMessageDto: CreateLastMessageDto,
  ) {
    const existingMessage = await this.messageModel
      .findOneAndUpdate(
        { userId: userId, whom: whom },
        { $set: updateMessageDto },
        { new: true },
      )
      .exec();

    if (!existingMessage) {
      throw new NotFoundException(`Message ${userId} not found`);
    }
    return existingMessage;
  }

  async create(createMessageDto: CreateLastMessageDto) {
    const messages = await this.messageModel
      .findOne({
        user: createMessageDto.user,
        whom: createMessageDto.whom,
      }) // where userId is your column name})
      .exec();
    if (messages == null) {
      const message = new this.messageModel(createMessageDto);
      return message.save();
    } else {
      this.update(
        createMessageDto.user,
        createMessageDto.whom,
        createMessageDto,
      );
    }
  }
}
