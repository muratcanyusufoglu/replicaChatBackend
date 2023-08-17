import { Injectable, Inject,OnModuleInit } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { UserService } from '../user/user.service'; // Replace with your user service
import { ChatCompletionResponseMessageRoleEnum } from 'openai';

@Injectable()
export class NotificationService {
  constructor(@Inject('FirebaseAdmin') private readonly firebaseAdmin: admin.app.App, private readonly userService: UserService
  ) {}


  async sendScheduledNotifications() {
    const users = await this.userService.findAll(); // Fetch all users from your user service
  const currentTime = Date.now().toString();
  const twoHoursInMillis = 2 * 60 * 60 * 1000; // 2 hours in milliseconds

  for (const user of users) {
    console.log(user.lastLogin, ' ', currentTime, ' ', twoHoursInMillis);
   const lastLogin = user.lastLogin; // Retrieve the last login timestamp from the user object

     if(parseInt(currentTime) - parseInt(lastLogin) >= twoHoursInMillis) {
      console.log(user.notificationToken);
     const notificationPayload: admin.messaging.NotificationMessagePayload = {
          title: 'Reminder',
          body: 'You have been logged out. Log in again to continue.',
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
