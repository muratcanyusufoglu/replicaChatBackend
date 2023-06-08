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
  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   console.log(typeof id);
  //   return this.messageService.findOne(id);
  // }
  @Get('gpt/:whom/:question')
  getOpenAI(@Param('whom') whom: string, @Param('question') question: string) {
    return this.messageService.getOpenAI(whom, question);
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
