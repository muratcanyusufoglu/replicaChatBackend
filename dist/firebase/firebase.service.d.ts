import * as admin from 'firebase-admin';
export declare class NotificationService {
    private readonly firebaseAdmin;
    constructor(firebaseAdmin: admin.app.App);
    sendNotification(deviceToken: string, notification: admin.messaging.NotificationMessagePayload): Promise<void>;
}
