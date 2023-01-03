"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const openai_1 = require("openai");
let AppService = class AppService {
    getHello() {
        return 'Hello Worlddd!';
    }
    async getOpenAI(question) {
        const key = process.env.GPT_API_KEY;
        const configuration = new openai_1.Configuration({
            apiKey: key,
        });
        try {
            const openai = new openai_1.OpenAIApi(configuration);
            const completion = await openai.createCompletion({
                model: 'text-davinci-003',
                prompt: question,
                max_tokens: 500,
            }, {
                timeout: 10000,
                headers: {
                    'Example-Header': 'example',
                },
            });
            const data = completion.data.choices[0].text;
            return data;
        }
        catch (error) {
            console.log('ERROR', error);
        }
    }
};
AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map