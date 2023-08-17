import { Module } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { NotificationController } from './firebase.controller';
import { NotificationService } from './firebase.service';
import { ConfigModule } from '@nestjs/config';
import { ScheduledNotificationService } from './scheduled.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../user/entities/user.entity';
import { UserService } from 'src/user/user.service';
import { LastMessages, LastMessageSchema } from 'src/lastMessages/entities/lastmessages.entity';
import { LastMessageService } from 'src/lastMessages/message.service';
import { Messages, MessageSchema } from 'src/messages/entities/messages.entity';
import { MessageService } from 'src/messages/message.service';


@Module({
  imports:[
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
    MongooseModule.forFeature([
      {
        name: Messages.name,
        schema: MessageSchema,
      },
    ]),
    ConfigModule.forRoot(),
  
  ],
  providers: [
    {
      provide: 'FirebaseAdmin',
      useValue: admin.initializeApp({
        credential: admin.credential.cert(require('C:/inetpub/wwwroot/replicaChatBackend/config/replica-chat-4cdc4-firebase-adminsdk-yhfmg-7ddbfed931.json')),
      }),
    },
    NotificationService,
    ScheduledNotificationService,
    UserService, 
    LastMessageService,
    MessageService
  ],
  exports: ['FirebaseAdmin'],
  controllers:[NotificationController]
})
export class FirebaseModule {}
