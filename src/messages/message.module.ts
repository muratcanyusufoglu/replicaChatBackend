import { CacheModule, Module } from '@nestjs/common';
import { MessageController } from './message.controller';
import { MessageService } from './message.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Messages, MessageSchema } from './entities/messages.entity';
import { ConfigModule } from '@nestjs/config';
import { User, UserSchema } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
import { LastMessageSchema, LastMessages } from 'src/lastMessages/entities/lastmessages.entity';
import { LastMessageService } from 'src/lastMessages/message.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Messages.name,
        schema: MessageSchema,
      },
    ]),
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
    ]),
    MongooseModule.forFeature([
      {
        name: LastMessages.name,
        schema: LastMessageSchema,
      },
    ]),
    ConfigModule.forRoot(),
  ],
  controllers: [MessageController],
  providers: [MessageService, UserService, LastMessageService],
})
export class MessageModule {}
