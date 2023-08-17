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
exports.LastMessageService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const lastmessages_entity_1 = require("./entities/lastmessages.entity");
let LastMessageService = class LastMessageService {
    constructor(messageModel) {
        this.messageModel = messageModel;
    }
    findAll() {
        return this.messageModel.find().exec();
    }
    async findOne(id) {
        const message = await this.messageModel
            .findOne({
            _id: id,
        })
            .exec();
        if (!message) {
            throw new common_1.NotFoundException(`message #${id} not found`);
        }
        return message;
    }
    async findPersonalChat(userId) {
        const messages = await this.messageModel
            .find({
            user: userId,
        })
            .exec();
        if (!messages) {
            throw new common_1.NotFoundException(`message #${userId} not found`);
        }
        return messages;
    }
    async update(userId, whom, updateMessageDto) {
        const existingMessage = await this.messageModel
            .findOneAndUpdate({ userId: userId, whom: whom }, { $set: updateMessageDto }, { new: true })
            .exec();
        if (!existingMessage) {
            throw new common_1.NotFoundException(`Message ${userId} not found`);
        }
        return existingMessage;
    }
    async create(createMessageDto) {
        const messages = await this.messageModel
            .findOne({
            user: createMessageDto.user,
            whom: createMessageDto.whom,
        })
            .exec();
        if (messages == null) {
            const message = new this.messageModel(createMessageDto);
            return message.save();
        }
        else {
            this.update(createMessageDto.user, createMessageDto.whom, createMessageDto);
        }
    }
};
LastMessageService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(lastmessages_entity_1.LastMessages.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], LastMessageService);
exports.LastMessageService = LastMessageService;
//# sourceMappingURL=message.service.js.map