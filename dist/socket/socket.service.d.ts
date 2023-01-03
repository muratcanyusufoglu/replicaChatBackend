import { Messages } from '../entity/messajes';
export declare class SocketService {
    private messages;
    getMessages(): Messages[];
    create(body: any): void;
}
