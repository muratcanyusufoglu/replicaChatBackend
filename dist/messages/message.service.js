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
const user_service_1 = require("../user/user.service");
const message_service_1 = require("../lastMessages/message.service");
let MessageService = class MessageService {
    constructor(messageModel, userService, lastMessageService) {
        this.messageModel = messageModel;
        this.userService = userService;
        this.lastMessageService = lastMessageService;
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
    async findPersonalChat(userId, whom) {
        const messages = await this.messageModel
            .find({
            user: userId,
            whom: whom,
        })
            .exec();
        if (!messages) {
            throw new common_1.NotFoundException(`message #${userId} not found`);
        }
        return messages;
    }
    async getOpenAIAnswer(userCheckDto) {
        console.log('userr', userCheckDto);
        const userInfo = await this.userService.findOne(userCheckDto.userId);
        const currentTime = Date.now();
        const packageFinishDate = Date.parse(userInfo.finishDate);
        const key = process.env.GPT_API_KEY;
        const configuration = new openai_1.Configuration({
            apiKey: key,
        });
        if (userInfo.messageCoin > 0 && packageFinishDate > currentTime) {
            try {
                const openai = new openai_1.OpenAIApi(configuration);
                const completion = await openai.createChatCompletion({
                    model: 'gpt-3.5-turbo',
                    messages: [
                        {
                            role: 'system',
                            content: `You currently represent ${userCheckDto.whom}. Please answer me as ${userCheckDto.whom} and share your conversations with people from his/her perspective. Your answer token number must be total of maxiumum 1000 token`,
                        },
                        { role: 'user', content: userCheckDto.question },
                    ],
                }, {
                    timeout: 30000,
                    headers: {
                        'Example-Header': 'example',
                    },
                });
                const data = completion.data.choices[0].message.content;
                if (data) {
                    this.create({
                        userId: userCheckDto.userId,
                        userPhoto: userCheckDto.userPhoto,
                        whom: userCheckDto.whom,
                        messageArray: [{
                                message: userCheckDto.question,
                                response: data,
                                date: currentTime.toString(),
                            }]
                    }).then(async () => {
                        await this.userService.update(userInfo.userId, { messageCoin: userInfo.messageCoin - 1 });
                        await this.lastMessageService.create({
                            user: userInfo.userId,
                            response: data,
                            date: currentTime.toString(),
                            whom: userCheckDto.whom
                        });
                    }).catch(() => { return 'Oooops we have a problem. Please try again'; });
                }
                return data;
            }
            catch (error) {
                console.log('ERRORR', error);
            }
        }
        else {
            return 'Your message token finish or your package time release.';
        }
    }
    async getOpenAIForNotification(whom, userId, userPhoto, date, response) {
        const currentTime = Date.now();
        const key = process.env.GPT_API_KEY;
        const configuration = new openai_1.Configuration({
            apiKey: key,
        });
        try {
            const openai = new openai_1.OpenAIApi(configuration);
            const completion = await openai.createChatCompletion({
                model: 'gpt-3.5-turbo',
                messages: [
                    {
                        role: 'system',
                        content: `You currently represent ${whom}. Please answer me as ${whom}. For a mobile app I have to push notificatioun user bacause of they are come the app."${response}". This is your last answer. Please produce a message for a notification the users come back the app. Your answer token number must be total maxiumum 100 token`,
                    },
                ],
            }, {
                timeout: 30000,
                headers: {
                    'Example-Header': 'example',
                },
            });
            const data = completion.data.choices[0].message.content;
            if (data) {
                this.create({
                    userId: userId,
                    userPhoto: userPhoto,
                    whom: whom,
                    messageArray: [{
                            message: '',
                            response: data,
                            date: date,
                        }]
                }).then(async () => {
                    await this.lastMessageService.create({
                        user: userId,
                        response: data,
                        date: currentTime.toString(),
                        whom: whom
                    });
                }).catch();
            }
            return data;
        }
        catch (error) {
            console.log('ERRORR', error);
        }
    }
    async create(createMessageDto) {
        const message = new this.messageModel(createMessageDto);
        const findingMessage = await this.findPersonalChat(message.userId, message.whom);
        console.log(findingMessage);
        if (findingMessage.length != 0) {
            const mess = await this.messageModel.findOneAndUpdate({
                userId: message.userId,
                whom: message.whom,
            }, { $push: { [`messageArray`]: message.messageArray[0] } }, { new: true });
            mess.save();
            return mess;
        }
        message.save();
        return message;
    }
};
MessageService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(messages_entity_1.Messages.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        user_service_1.UserService,
        message_service_1.LastMessageService])
], MessageService);
exports.MessageService = MessageService;
//# sourceMappingURL=message.service.js.map