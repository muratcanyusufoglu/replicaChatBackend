"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DalleModule = void 0;
const common_1 = require("@nestjs/common");
const followers_controller_1 = require("./followers.controller");
const followers_service_1 = require("./followers.service");
const mongoose_1 = require("@nestjs/mongoose");
const dalle_entity_1 = require("./entities/dalle.entity");
const config_1 = require("@nestjs/config");
let DalleModule = class DalleModule {
};
DalleModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: dalle_entity_1.Dalle.name,
                    schema: dalle_entity_1.DalleSchema,
                },
            ]),
            config_1.ConfigModule.forRoot(),
        ],
        controllers: [followers_controller_1.DalleController],
        providers: [followers_service_1.DalleService],
    })
], DalleModule);
exports.DalleModule = DalleModule;
//# sourceMappingURL=dalle.module.js.map