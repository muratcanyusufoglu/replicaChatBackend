import { MessageService } from './message.service';
import { CreateMessageDto } from './dto/create-message.dto';
export declare class MessageController {
    private readonly messageService;
    constructor(messageService: MessageService);
    findAll(paginationQuery: any): Promise<any[]>;
    getOpenAI(question: string): Promise<any>;
    create(createMessageDto: CreateMessageDto): any;
}
