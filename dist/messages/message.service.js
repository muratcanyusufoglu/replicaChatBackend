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
exports.MessageService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const messages_entity_1 = require("./entities/messages.entity");
const openai_1 = require("openai");
let MessageService = class MessageService {
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
    async getOpenAI(question) {
        const key = process.env.GPT_API_KEY;
        const configuration = new openai_1.Configuration({
            apiKey: key,
        });
        try {
            const openai = new openai_1.OpenAIApi(configuration);
            const completion = await openai.createChatCompletion({
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: question }],
            }, {
                timeout: 30000,
                headers: {
                    'Example-Header': 'example',
                },
            });
            const data = completion.data.choices[0].message;
            console.log('dataa', data, completion);
            if (data) {
            }
            return data;
        }
        catch (error) {
            console.log('ERRORR', error);
        }
    }
    create(createMessageDto) {
        const message = new this.messageModel(createMessageDto);
        return message.save();
    }
};
MessageService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(messages_entity_1.Messages.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], MessageService);
exports.MessageService = MessageService;
//# sourceMappingURL=message.service.js.map