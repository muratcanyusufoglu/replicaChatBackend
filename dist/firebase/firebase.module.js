"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirebaseModule = void 0;
const common_1 = require("@nestjs/common");
const admin = require("firebase-admin");
const firebase_controller_1 = require("./firebase.controller");
const firebase_service_1 = require("./firebase.service");
const config_1 = require("@nestjs/config");
const scheduled_service_1 = require("./scheduled.service");
const mongoose_1 = require("@nestjs/mongoose");
const user_entity_1 = require("../user/entities/user.entity");
const user_service_1 = require("../user/user.service");
let FirebaseModule = class FirebaseModule {
};
FirebaseModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: user_entity_1.User.name,
                    schema: user_entity_1.UserSchema,
                },
            ]),
            config_1.ConfigModule.forRoot(),
        ],
        providers: [
            {
                provide: 'FirebaseAdmin',
                useValue: admin.initializeApp({
                    credential: admin.credential.cert(require('C:/inetpub/wwwroot/replicaChatBackend/config/replica-chat-4cdc4-firebase-adminsdk-yhfmg-7ddbfed931.json')),
                }),
            },
            firebase_service_1.NotificationService,
            scheduled_service_1.ScheduledNotificationService,
            user_service_1.UserService
        ],
        exports: ['FirebaseAdmin'],
        controllers: [firebase_controller_1.NotificationController]
    })
], FirebaseModule);
exports.FirebaseModule = FirebaseModule;
//# sourceMappingURL=firebase.module.js.map