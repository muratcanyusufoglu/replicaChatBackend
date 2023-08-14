import { NotificationService } from './firebase.service';
export declare class NotificationController {
    private readonly notificationService;
    constructor(notificationService: NotificationService);
    sendNotification(body: {
        deviceToken: string;
        message: string;
    }): Promise<{
        message: string;
    }>;
}
