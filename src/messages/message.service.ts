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

  async getOpenAI(question: string): Promise<any> {
    const key = process.env.GPT_API_KEY;
    console.log('key', key);
    const configuration = new Configuration({
      apiKey: key,
    });
    try {
      const openai = new OpenAIApi(configuration);

      const completion = await openai.createCompletion(
        {
          model: 'text-davinci-003',
          prompt: question,
          max_tokens: 500,
        },
        {
          timeout: 10000,
          headers: {
            'Example-Header': 'example',
          },
        },
      );
      console.log('1234', completion.data.choices[0].text);
      const data = completion.data.choices[0].text;
      return data;
    } catch (error) {
      console.log('ERROR', error);
    }
  }

  create(createMessageDto: CreateMessageDto) {
    const message = new this.messageModel(createMessageDto);
    return message;
  }
}
