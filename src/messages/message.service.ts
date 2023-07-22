import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateMessageDto } from './dto/create-message.dto';
import { Messages } from './entities/messages.entity';

import { Configuration, OpenAIApi } from 'openai';

@Injectable()
export class MessageService {
  constructor(
    @InjectModel(Messages.name)
    private readonly messageModel: Model<Messages>,
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

  async findPersonalChat(userId: string, whom: string) {
    const messages = await this.messageModel
      .find({
        user: userId,
        whom: whom, // where userId is your column name
      })
      .exec();
    if (!messages) {
      //throw new HttpException(`message #${userId} not found`, HttpStatus.NOT_FOUND);
      throw new NotFoundException(`message #${userId} not found`);
    }
    return messages;
  }

  async getOpenAI(whom: string, question: string): Promise<any> {
    const key = process.env.GPT_API_KEY;
    const configuration = new Configuration({
      apiKey: key,
    });
    try {
      const openai = new OpenAIApi(configuration);

      const completion = await openai.createChatCompletion(
        {
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content: `You currently represent ${whom}. Please answer me as ${whom} and share your conversations with people from his/her perspective.`,
            },
            { role: 'user', content: question },
          ],

          //prompt: question,
          //max_tokens: 500,
        },
        {
          timeout: 30000,
          headers: {
            'Example-Header': 'example',
          },
        },
      );
      const data = completion.data.choices[0].message;
      console.log('dataa', data, completion);
      if (data) {
      }
      return data;
    } catch (error) {
      console.log('ERRORR', error);
    }
  }

  // create(createMessageDto: CreateMessageDto) {
  //   const message = new this.messageModel(createMessageDto);
  //   const findingMesage = this.findPersonalChat(
  //     message.user,
  //     message.userPhoto,
  //   );

  //   return message.save();
  // }

  async create(createMessageDto: CreateMessageDto) {
    const message = new this.messageModel(createMessageDto);
    const findingMessage = this.findPersonalChat(message.userId, message.whom);
    if (findingMessage != null) {
      const mess = await this.messageModel.findOneAndUpdate(
        {
          userId: message.userId,
          whom: message.whom,
        },
        { $push: { [`messageArray`]: message.messageArray[0] } },
        { new: true },
      );
      mess.save();
      return mess;
    }
    message.save();
    return message;
  }
}
