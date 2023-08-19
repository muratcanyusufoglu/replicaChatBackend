import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateMessageDto } from './dto/create-message.dto';
import { Messages } from './entities/messages.entity';

import { Configuration, OpenAIApi } from 'openai';
import { UserService } from 'src/user/user.service';
import { UserCheckDto } from './dto/user-check.dto';
import { LastMessageService } from 'src/lastMessages/message.service';

@Injectable()
export class MessageService {
  constructor(
    @InjectModel(Messages.name)
    private readonly messageModel: Model<Messages>,
    private readonly userService: UserService,
    private readonly lastMessageService: LastMessageService
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

  async getOpenAIAnswer(userCheckDto: UserCheckDto): Promise<any> {
    const userInfo = await this.userService.findOne(userCheckDto.userId);
    
    const currentTime = Date.now();
    const packageFinishDate = Date.parse(userInfo.finishDate);
    
    const key = process.env.GPT_API_KEY;
    const configuration = new Configuration({
      apiKey: key,
    });
    //control for user message number finish or package date finish.
    if(userInfo.messageCoin > 0 && packageFinishDate > currentTime){
    try {
      const openai = new OpenAIApi(configuration);
      const completion = await openai.createChatCompletion(
        {
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content: `You currently represent ${userCheckDto.whom}. Please answer me as ${userCheckDto.whom} and share your conversations with people from his/her perspective. Your answer token number must be total of maxiumum 1000 token`,
            },
            { role: 'user', content: userCheckDto.question },
          ],
        },
        {
          timeout: 30000,
          headers: {
            'Example-Header': 'example',
          },
        },
      );
      const data = completion.data.choices[0].message.content;
      if(data){
        this.create({
          userId: userCheckDto.userId,
          userPhoto: userCheckDto.userPhoto,
          whom: userCheckDto.whom,
          messageArray:[{
            message: userCheckDto.question,
            response: data,
            date: currentTime.toString(),
          }]
        }).then(async ()=>{
          await this.userService.update(userInfo.userId, {messageCoin: userInfo.messageCoin-1})
          await this.lastMessageService.create({
            user: userInfo.userId,
            response: data,
            date: currentTime.toString(),
            whom: userCheckDto.whom
          })
        }
        ).catch(()=> {return 'Oooops we have a problem. Please try again'})
      }
      return data;
    } catch (error) {
      console.log('ERRORR', error);
    }
    }
    else{
      return 'Your message token finish or your package time release.'
    }
  }

  async getOpenAIForNotification(whom: string, userId: string,userPhoto:string,date:string, response:string): Promise<any> {
    const currentTime = Date.now();

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
              content: `You currently represent ${whom}. Please answer me as ${whom}. For a mobile app I have to push notificatioun user bacause of they are come the app."${response}". This is your last answer. Please produce a message for a notification the users come back the app. Your answer token number must be total maxiumum 100 token`,
            },
          ],
          //prompt: question,
        },
        {
          timeout: 30000,
          headers: {
            'Example-Header': 'example',
          },
        },
      );
      const data = completion.data.choices[0].message.content;
      if(data){
        this.create({
          userId: userId,
          userPhoto: userPhoto,
          whom: whom,
          messageArray:[{
            message: '',
            response: data,
            date: date,
          }]
        }).then(async ()=>{
          await this.lastMessageService.create({
            user: userId,
            response: data,
            date: currentTime.toString(),
            whom: whom
          })
        }
          
        ).catch(
  
        )
      }
      return data;
    } catch (error) {
      console.log('ERRORR', error);
    }
  }

  async create(createMessageDto: CreateMessageDto) {
    const message = new this.messageModel(createMessageDto);
    const findingMessage = await this.findPersonalChat(message.userId, message.whom);
    console.log(findingMessage);
    if (findingMessage.length != 0) {
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
