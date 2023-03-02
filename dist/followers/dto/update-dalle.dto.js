"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDalleDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_dalle_dto_1 = require("./create-dalle.dto");
class UpdateDalleDto extends (0, mapped_types_1.PartialType)(create_dalle_dto_1.CreateDalleDto) {
}
exports.UpdateDalleDto = UpdateDalleDto;
//# sourceMappingURL=update-dalle.dto.js.map