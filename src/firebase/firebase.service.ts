import { Injectable, Inject } from '@nestjs/common';
import * as admin from 'firebase-admin';

@Injectable()
export class NotificationService {
  constructor(@Inject('FirebaseAdmin') private readonly firebaseAdmin: admin.app.App) {}

  async sendNotification(deviceToken: string, notification: admin.messaging.NotificationMessagePayload) {
    try {
      await this.firebaseAdmin.messaging().sendToDevice(deviceToken, { notification });
    } catch (error) {
      console.error('Error sending notification:', error);
    }
  }
}
