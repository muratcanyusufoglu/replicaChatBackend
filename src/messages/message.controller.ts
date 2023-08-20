import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { MessageService } from './message.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { UserCheckDto } from './dto/user-check.dto';
//import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('messagesWhom')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Get()
  findAll(@Query() paginationQuery) {
    return this.messageService.findAll();
  }

  @Post('gpt')
  getOpenAIAnswer(@Body() userCheckDto: UserCheckDto) {
    console.log('asd', userCheckDto.userId)
    return this.messageService.getOpenAIAnswer(userCheckDto);
  }

  @Get('gptNotification/:whom/:question')
  getOpenAIForNotification(
  @Param('whom') whom: string,@Param('userId') userId: string,
   @Param('userPhoto') userPhoto: string, @Param('date') date: string, @Param('response') response: string) {
    return this.messageService.getOpenAIForNotification(whom,userId,userPhoto,date,response);
  }

  @Get('getPersonalChat/:userId/:whom')
  findPersonalChat(
    @Param('userId') userId: string,
    @Param('whom') whom: string,
  ) {
    return this.messageService.findPersonalChat(userId, whom);
  }

  @Post()
  create(@Body() createMessageDto: CreateMessageDto) {
    console.log(createMessageDto instanceof CreateMessageDto);
    return this.messageService.create(createMessageDto);
  }
}
