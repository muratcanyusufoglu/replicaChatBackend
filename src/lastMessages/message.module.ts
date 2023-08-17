import { CacheModule, Module } from '@nestjs/common';
import { LastMessageController } from './message.controller';
import { LastMessageService } from './message.service';
import { MongooseModule } from '@nestjs/mongoose';
import { LastMessages, LastMessageSchema } from './entities/lastmessages.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: LastMessages.name,
        schema: LastMessageSchema,
      },
    ]),
    ConfigModule.forRoot(),
  ],
  controllers: [LastMessageController],
  providers: [LastMessageService],
})
export class LastMessageModule {}
