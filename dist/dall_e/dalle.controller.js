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
exports.DalleController = void 0;
const common_1 = require("@nestjs/common");
const dalle_service_1 = require("./dalle.service");
const create_dalle_dto_1 = require("./dto/create-dalle.dto");
const update_dalle_dto_1 = require("./dto/update-dalle.dto");
let DalleController = class DalleController {
    constructor(dalleService) {
        this.dalleService = dalleService;
    }
    findAll(paginationQuery) {
        return this.dalleService.findAll();
    }
    getOpenAI(question) {
        return this.dalleService.getOpenAI(question);
    }
    create(createDalleDto) {
        console.log(createDalleDto instanceof create_dalle_dto_1.CreateDalleDto);
        return this.dalleService.create(createDalleDto);
    }
    update(id, updateDalleDto) {
        return this.dalleService.update(id, updateDalleDto);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DalleController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':prompt'),
    __param(0, (0, common_1.Param)('prompt')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DalleController.prototype, "getOpenAI", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_dalle_dto_1.CreateDalleDto]),
    __metadata("design:returntype", void 0)
], DalleController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_dalle_dto_1.UpdateDalleDto]),
    __metadata("design:returntype", void 0)
], DalleController.prototype, "update", null);
DalleController = __decorate([
    (0, common_1.Controller)('dalle'),
    __metadata("design:paramtypes", [dalle_service_1.DalleService])
], DalleController);
exports.DalleController = DalleController;
//# sourceMappingURL=dalle.controller.js.map