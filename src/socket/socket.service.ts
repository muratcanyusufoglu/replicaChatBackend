import { Injectable, NotFoundException } from '@nestjs/common';
import { Messages } from '../entity/messajes';

@Injectable()
export class SocketService {
  private messages: Messages[] = [
    {
      id: 1,
      message: 'Shipwreck Roast',
    },
    {
      id: 2,
      message: 'Shipwreck Roast',
    },
  ];

  getMessages() {
    const messages = this.messages;
    if (!messages) {
      throw new NotFoundException('Not found any coffee name');
    }
    return messages;
  }

  create(body: any) {
    this.messages.push(body);
  }
}
