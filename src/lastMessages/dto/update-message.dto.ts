import { PartialType } from '@nestjs/mapped-types';
import { CreateLastMessageDto } from './create-message.dto';
export class UpdateMessageDto extends PartialType(CreateLastMessageDto) {}
