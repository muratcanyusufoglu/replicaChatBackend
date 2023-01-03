"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketService = void 0;
const common_1 = require("@nestjs/common");
let SocketService = class SocketService {
    constructor() {
        this.messages = [
            {
                id: 1,
                message: 'Shipwreck Roast',
            },
            {
                id: 2,
                message: 'Shipwreck Roast',
            },
        ];
    }
    getMessages() {
        const messages = this.messages;
        if (!messages) {
            throw new common_1.NotFoundException('Not found any coffee name');
        }
        return messages;
    }
    create(body) {
        this.messages.push(body);
    }
};
SocketService = __decorate([
    (0, common_1.Injectable)()
], SocketService);
exports.SocketService = SocketService;
//# sourceMappingURL=socket.service.js.map