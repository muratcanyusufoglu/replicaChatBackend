import { Injectable, Inject,OnModuleInit } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { UserService } from '../user/user.service'; // Replace with your user service
import { ChatCompletionResponseMessageRoleEnum } from 'openai';
import { LastMessageService } from 'src/lastMessages/message.service';
import { MessageService } from 'src/messages/message.service';

@Injectable()
export class NotificationService {
  constructor(@Inject('FirebaseAdmin') private readonly firebaseAdmin: admin.app.App, 
  private readonly userService: UserService,
  private readonly lastMessageService: LastMessageService,
  private readonly messageService: MessageService,

  ) {}


  async sendScheduledNotifications() {
  
  const users = await this.userService.findAll(); // Fetch all users from your user service
  const currentTime = Date.now().toString();
  const twoHoursInMillis = 2 * 60 * 60 * 1000; // 2 hours in milliseconds

  for (const user of users) {
    const lastLogin = user.lastLogin; // Retrieve the last login timestamp from the user object
    const lastMessage = await this.lastMessageService.findPersonalChat(user.userId).then((resp)=>{return resp[resp.length -1]});
     
    if(parseInt(currentTime) - parseInt(lastLogin) >= twoHoursInMillis) {
      const notificationMessage = await this.messageService.getOpenAIForNotification(lastMessage.whom, user.userId, user.userPhoto, currentTime, lastMessage.response)
      const notificationPayload: admin.messaging.NotificationMessagePayload = {
          title: lastMessage.whom,
          body: notificationMessage,
        };

        await this.sendNotification(user.notificationToken, notificationPayload);
      }
    }
    }

  async sendNotification(deviceToken: string, notification: admin.messaging.NotificationMessagePayload) {
    try {
      await this.firebaseAdmin.messaging().sendToDevice(deviceToken, { notification });
    } catch (error) {
      console.error('Error sending notification:', error);
    }
  }
}
