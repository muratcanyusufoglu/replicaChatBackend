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
exports.DalleService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const dalle_entity_1 = require("./entities/dalle.entity");
const openai_1 = require("openai");
let DalleService = class DalleService {
    constructor(dalleModel) {
        this.dalleModel = dalleModel;
    }
    findAll() {
        return this.dalleModel.find().exec();
    }
    async findOne(id) {
        const message = await this.dalleModel
            .findOne({
            _id: id,
        })
            .exec();
        if (!message) {
            throw new common_1.NotFoundException(`message #${id} not found`);
        }
        return message;
    }
    async getOpenAI(prompt) {
        const key = process.env.GPT_API_KEY;
        const configuration = new openai_1.Configuration({
            apiKey: key,
        });
        try {
            const openai = new openai_1.OpenAIApi(configuration);
            const response = await openai.createImage({
                prompt: prompt,
                n: 1,
                size: "1024x1024",
            }, {
                timeout: 10000,
                headers: {
                    'Example-Header': 'example',
                },
            });
            const image = response.data.data[0].url;
            console.log('data', image, response);
            if (image) {
            }
            return image;
        }
        catch (error) {
            console.log('ERROR getopenai answer', error);
        }
    }
    create(createDalleDto) {
        const image = new this.dalleModel(createDalleDto);
        return image.save();
    }
};
DalleService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(dalle_entity_1.Dalle.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], DalleService);
exports.DalleService = DalleService;
//# sourceMappingURL=dalle.service.js.map