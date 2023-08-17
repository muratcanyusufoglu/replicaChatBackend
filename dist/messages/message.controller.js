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
exports.MessageController = void 0;
const common_1 = require("@nestjs/common");
const message_service_1 = require("./message.service");
const create_message_dto_1 = require("./dto/create-message.dto");
let MessageController = class MessageController {
    constructor(messageService) {
        this.messageService = messageService;
    }
    findAll(paginationQuery) {
        return this.messageService.findAll();
    }
    getOpenAIAnswer(whom, question) {
        return this.messageService.getOpenAIAnswer(whom, question);
    }
    getOpenAIForNotification(whom, userId, userPhoto, date, response) {
        return this.messageService.getOpenAIForNotification(whom, userId, userPhoto, date, response);
    }
    findPersonalChat(userId, whom) {
        return this.messageService.findPersonalChat(userId, whom);
    }
    create(createMessageDto) {
        console.log(createMessageDto instanceof create_message_dto_1.CreateMessageDto);
        return this.messageService.create(createMessageDto);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MessageController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('gpt/:whom/:question'),
    __param(0, (0, common_1.Param)('whom')),
    __param(1, (0, common_1.Param)('question')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], MessageController.prototype, "getOpenAIAnswer", null);
__decorate([
    (0, common_1.Get)('gptNotification/:whom/:question'),
    __param(0, (0, common_1.Param)('whom')),
    __param(1, (0, common_1.Param)('userId')),
    __param(2, (0, common_1.Param)('userPhoto')),
    __param(3, (0, common_1.Param)('date')),
    __param(4, (0, common_1.Param)('response')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String]),
    __metadata("design:returntype", void 0)
], MessageController.prototype, "getOpenAIForNotification", null);
__decorate([
    (0, common_1.Get)('getPersonalChat/:userId/:whom'),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Param)('whom')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], MessageController.prototype, "findPersonalChat", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_message_dto_1.CreateMessageDto]),
    __metadata("design:returntype", void 0)
], MessageController.prototype, "create", null);
MessageController = __decorate([
    (0, common_1.Controller)('messagesWhom'),
    __metadata("design:paramtypes", [message_service_1.MessageService])
], MessageController);
exports.MessageController = MessageController;
//# sourceMappingURL=message.controller.js.map