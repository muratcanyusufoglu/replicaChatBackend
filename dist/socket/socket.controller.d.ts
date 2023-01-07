import { SocketService } from './socket.service';
export declare class SocketController {
    private readonly socketServices;
    constructor(socketServices: SocketService);
    getMessages(): any;
    create(body: any): void;
}
