import * as cron from 'node-cron';
import { Injectable, OnModuleInit } from '@nestjs/common';
import { NotificationService } from './firebase.service';

@Injectable()
export class ScheduledNotificationService implements OnModuleInit {
  constructor(private readonly notificationService: NotificationService) {}

  onModuleInit() {
    // Run the task every hour to check for users eligible for notification
    cron.schedule('0 */2 * * *', async () => {
      await this.notificationService.sendScheduledNotifications();
    });
  }
}
