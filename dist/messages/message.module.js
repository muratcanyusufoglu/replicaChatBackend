"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageModule = void 0;
const common_1 = require("@nestjs/common");
const message_controller_1 = require("./message.controller");
const message_service_1 = require("./message.service");
const mongoose_1 = require("@nestjs/mongoose");
const messages_entity_1 = require("./entities/messages.entity");
const config_1 = require("@nestjs/config");
const user_entity_1 = require("../user/entities/user.entity");
const user_service_1 = require("../user/user.service");
const lastmessages_entity_1 = require("../lastMessages/entities/lastmessages.entity");
const message_service_2 = require("../lastMessages/message.service");
let MessageModule = class MessageModule {
};
MessageModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: messages_entity_1.Messages.name,
                    schema: messages_entity_1.MessageSchema,
                },
            ]),
            mongoose_1.MongooseModule.forFeature([
                {
                    name: user_entity_1.User.name,
                    schema: user_entity_1.UserSchema,
                },
            ]),
            mongoose_1.MongooseModule.forFeature([
                {
                    name: lastmessages_entity_1.LastMessages.name,
                    schema: lastmessages_entity_1.LastMessageSchema,
                },
            ]),
            config_1.ConfigModule.forRoot(),
        ],
        controllers: [message_controller_1.MessageController],
        providers: [message_service_1.MessageService, user_service_1.UserService, message_service_2.LastMessageService],
    })
], MessageModule);
exports.MessageModule = MessageModule;
//# sourceMappingURL=message.module.js.map