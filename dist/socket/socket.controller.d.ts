import { SocketService } from './socket.service';
export declare class SocketController {
    private readonly socketServices;
    constructor(socketServices: SocketService);
    getMessages(): import("../entity/messajes").Messages[];
    create(body: any): void;
}
