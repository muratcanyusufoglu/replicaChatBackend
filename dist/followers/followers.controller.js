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
exports.FollowController = void 0;
const common_1 = require("@nestjs/common");
const followers_service_1 = require("./followers.service");
const create_followers_dto_1 = require("./dto/create-followers.dto");
const update_followers_dto_1 = require("./dto/update-followers.dto");
let FollowController = class FollowController {
    constructor(followService) {
        this.followService = followService;
    }
    findAll(paginationQuery) {
        return this.followService.findAll();
    }
    findOne(followerId) {
        console.log(typeof followerId);
        return this.followService.findOne(followerId);
    }
    findOneAllInfo(followerId) {
        console.log(typeof followerId);
        return this.followService.findOneAllInfo(followerId);
    }
    create(createFollowDto) {
        console.log(createFollowDto instanceof create_followers_dto_1.CreateFollowDto);
        return this.followService.create(createFollowDto);
    }
    update(id, updateFollowersDto) {
        return this.followService.update(id, updateFollowersDto);
    }
    addFollowingId(followerId, updateFollowersDto) {
        return this.followService.update(followerId, updateFollowersDto);
    }
    remove(followId, followerId) {
        return this.followService.remove(followId, followerId);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FollowController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FollowController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('withInfos/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FollowController.prototype, "findOneAllInfo", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_followers_dto_1.CreateFollowDto]),
    __metadata("design:returntype", void 0)
], FollowController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_followers_dto_1.UpdateFollowersDto]),
    __metadata("design:returntype", void 0)
], FollowController.prototype, "update", null);
__decorate([
    (0, common_1.Patch)('addFollowingId:followerId'),
    __param(0, (0, common_1.Param)('followerId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_followers_dto_1.UpdateFollowersDto]),
    __metadata("design:returntype", void 0)
], FollowController.prototype, "addFollowingId", null);
__decorate([
    (0, common_1.Delete)('deleteUser/:followId/:followerId'),
    __param(0, (0, common_1.Param)('followId')),
    __param(1, (0, common_1.Param)('followerId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], FollowController.prototype, "remove", null);
FollowController = __decorate([
    (0, common_1.Controller)('follower'),
    __metadata("design:paramtypes", [followers_service_1.FollowService])
], FollowController);
exports.FollowController = FollowController;
//# sourceMappingURL=followers.controller.js.map