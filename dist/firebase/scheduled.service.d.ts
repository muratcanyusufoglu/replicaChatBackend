import { OnModuleInit } from '@nestjs/common';
import { NotificationService } from './firebase.service';
export declare class ScheduledNotificationService implements OnModuleInit {
    private readonly notificationService;
    constructor(notificationService: NotificationService);
    onModuleInit(): void;
}
