import { CacheModule, Module } from '@nestjs/common';
import { MessageController } from './message.controller';
import { MessageService } from './message.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Messages, MessageSchema } from './entities/messages.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Messages.name,
        schema: MessageSchema,
      },
    ]),
    ConfigModule.forRoot(),
  ],
  controllers: [MessageController],
  providers: [MessageService],
})
export class MessageModule {}
