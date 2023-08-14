import { Module } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { NotificationController } from './firebase.controller';
import { NotificationService } from './firebase.service';


@Module({
  providers: [
    {
      provide: 'FirebaseAdmin',
      useValue: admin.initializeApp({
        credential: admin.credential.cert(require('C:/inetpub/wwwroot/replicaChatBackend/config/replica-chat-4cdc4-firebase-adminsdk-yhfmg-7ddbfed931.json')),
      }),
    },
    NotificationService
  ],
  exports: ['FirebaseAdmin'],
  controllers:[NotificationController]
})
export class FirebaseModule {}
