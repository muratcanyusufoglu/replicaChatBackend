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

@Controller('messages')
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

  @Get(':question')
  getOpenAI(@Param('question') question: string) {
    return this.messageService.getOpenAI(question);
  }

  @Post()
  create(@Body() createMessageDto: CreateMessageDto) {
    console.log(createMessageDto instanceof CreateMessageDto);
    return this.messageService.create(createMessageDto);
  }
}
