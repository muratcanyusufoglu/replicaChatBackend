import { Controller, Post, Body } from '@nestjs/common';
import { NotificationService } from './firebase.service';
import * as admin from 'firebase-admin';
@Controller('notifications')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Post('send')
  async sendNotification(@Body() body: { deviceToken: string, message: string }) {
    const notificationPayload: admin.messaging.NotificationMessagePayload = {
      title: 'Notification Title',
      body: body.message,
    };

    await this.notificationService.sendNotification(body.deviceToken, notificationPayload);

    return { message: 'Notification sent successfully.' };
  }
}
