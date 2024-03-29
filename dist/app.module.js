"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const app_controller_1 = require("./app.controller");
const message_module_1 = require("./messages/message.module");
const mongoose_1 = require("@nestjs/mongoose");
const user_module_1 = require("./user/user.module");
const message_module_2 = require("./lastMessages/message.module");
const firebase_module_1 = require("./firebase/firebase.module");
const key = process.env.MONGODB_API_KEY;
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            message_module_1.MessageModule,
            user_module_1.UserModule,
            message_module_2.LastMessageModule,
            firebase_module_1.FirebaseModule,
            mongoose_1.MongooseModule.forRoot(key),
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map