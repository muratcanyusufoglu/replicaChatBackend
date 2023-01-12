import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDalleDto } from './dto/create-dalle.dto';
import { Dalle } from './entities/dalle.entity';

import { Configuration, OpenAIApi } from 'openai';

@Injectable()
export class DalleService {
  constructor(
    @InjectModel(Dalle.name)
    private readonly dalleModel: Model<Dalle>,
  ) {}

  findAll() {
    return this.dalleModel.find().exec();
  }

  async findOne(id: string) {
    const message = await this.dalleModel
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

  async getOpenAI(prompt: string): Promise<any> {
    const key = process.env.GPT_API_KEY;
    const configuration = new Configuration({
      apiKey: key,
    });
    try {
      const openai = new OpenAIApi(configuration);

      const response = await openai.createImage(
        {
          prompt: prompt,
          n: 1,
          size: "1024x1024",
        },
        {
          timeout: 10000,
          headers: {
            'Example-Header': 'example',
          },
        },
      );
      const image = response.data.data[0].url;

      console.log('data',image, response);
      if(image) {
      }
      return image;
    } catch (error) {
      console.log('ERROR', error);
    }
  }

  create(createDalleDto: CreateDalleDto) {
    const image = new this.dalleModel(createDalleDto);
    return image.save();
  }
}
