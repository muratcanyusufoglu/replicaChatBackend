"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFollowersDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_followers_dto_1 = require("./create-followers.dto");
class UpdateFollowersDto extends (0, mapped_types_1.PartialType)(create_followers_dto_1.CreateFollowDto) {
}
exports.UpdateFollowersDto = UpdateFollowersDto;
//# sourceMappingURL=update-followers.dto.js.map