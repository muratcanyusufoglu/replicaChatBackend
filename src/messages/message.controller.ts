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
//import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('messagesWhom')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Get()
  findAll(@Query() paginationQuery) {
    return this.messageService.findAll();
  }

  @Get('gpt/:whom/:question')
  getOpenAIAnswer(@Param('whom') whom: string, @Param('question') question: string) {
    return this.messageService.getOpenAIAnswer(whom, question);
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
