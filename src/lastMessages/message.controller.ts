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
import { LastMessageService } from './message.service';
import { CreateLastMessageDto } from './dto/create-message.dto';
//import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('lastmessage')
export class LastMessageController {
  constructor(private readonly messageService: LastMessageService) {}

  @Get()
  findAll(@Query() paginationQuery) {
    return this.messageService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   console.log(typeof id);
  //   return this.messageService.findOne(id);
  // }

  @Get('/:userId')
  findPersonalChat(@Param('userId') userId: string) {
    return this.messageService.findPersonalChat(userId);
  }

  @Post()
  create(@Body() createMessageDto: CreateLastMessageDto) {
    console.log(createMessageDto instanceof CreateLastMessageDto);
    return this.messageService.create(createMessageDto);
  }
}
