"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationService = void 0;
const common_1 = require("@nestjs/common");
const admin = require("firebase-admin");
const user_service_1 = require("../user/user.service");
const message_service_1 = require("../lastMessages/message.service");
const message_service_2 = require("../messages/message.service");
let NotificationService = class NotificationService {
    constructor(firebaseAdmin, userService, lastMessageService, messageService) {
        this.firebaseAdmin = firebaseAdmin;
        this.userService = userService;
        this.lastMessageService = lastMessageService;
        this.messageService = messageService;
    }
    async sendScheduledNotifications() {
        const users = await this.userService.findAll();
        const currentTime = Date.now().toString();
        const twoHoursInMillis = 2 * 60 * 60 * 1000;
        for (const user of users) {
            const lastLogin = user.lastLogin;
            const lastMessage = await this.lastMessageService.findPersonalChat(user.userId).then((resp) => { return resp[resp.length - 1]; });
            if (parseInt(currentTime) - parseInt(lastLogin) >= twoHoursInMillis) {
                const notificationMessage = await this.messageService.getOpenAIForNotification(lastMessage.whom, user.userId, user.userPhoto, currentTime, lastMessage.response);
                const notificationPayload = {
                    title: lastMessage.whom,
                    body: notificationMessage,
                };
                await this.sendNotification(user.notificationToken, notificationPayload);
            }
        }
    }
    async sendNotification(deviceToken, notification) {
        try {
            await this.firebaseAdmin.messaging().sendToDevice(deviceToken, { notification });
        }
        catch (error) {
            console.error('Error sending notification:', error);
        }
    }
};
NotificationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('FirebaseAdmin')),
    __metadata("design:paramtypes", [Object, user_service_1.UserService,
        message_service_1.LastMessageService,
        message_service_2.MessageService])
], NotificationService);
exports.NotificationService = NotificationService;
//# sourceMappingURL=firebase.service.js.map