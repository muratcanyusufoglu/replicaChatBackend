import * as admin from 'firebase-admin';
import { UserService } from '../user/user.service';
export declare class NotificationService {
    private readonly firebaseAdmin;
    private readonly userService;
    constructor(firebaseAdmin: admin.app.App, userService: UserService);
    sendScheduledNotifications(): Promise<void>;
    sendNotification(deviceToken: string, notification: admin.messaging.NotificationMessagePayload): Promise<void>;
}
