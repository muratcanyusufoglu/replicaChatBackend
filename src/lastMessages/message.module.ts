import { CacheModule, Module } from '@nestjs/common';
import { MessageController } from './message.controller';
import { MessageService } from './message.service';
import { MongooseModule } from '@nestjs/mongoose';
import { LastMessages, MessageSchema } from './entities/messages.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: LastMessages.name,
        schema: MessageSchema,
      },
    ]),
    ConfigModule.forRoot(),
  ],
  controllers: [MessageController],
  providers: [MessageService],
})
export class LastMessageModule {}
