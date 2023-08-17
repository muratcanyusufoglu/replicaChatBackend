import * as admin from 'firebase-admin';
import { UserService } from '../user/user.service';
import { LastMessageService } from 'src/lastMessages/message.service';
import { MessageService } from 'src/messages/message.service';
export declare class NotificationService {
    private readonly firebaseAdmin;
    private readonly userService;
    private readonly lastMessageService;
    private readonly messageService;
    constructor(firebaseAdmin: admin.app.App, userService: UserService, lastMessageService: LastMessageService, messageService: MessageService);
    sendScheduledNotifications(): Promise<void>;
    sendNotification(deviceToken: string, notification: admin.messaging.NotificationMessagePayload): Promise<void>;
}
