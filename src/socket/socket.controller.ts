import { Body, Controller, Get, Post } from '@nestjs/common';
import { SocketService } from './socket.service';

@Controller('socket')
export class SocketController {
  constructor(private readonly socketServices: SocketService) {}

  @Get('/API')
  getMessages() {
    return this.socketServices.getMessages();
  }

  @Post()
  create(@Body() body) {
    return this.socketServices.create(body);
  }
}
