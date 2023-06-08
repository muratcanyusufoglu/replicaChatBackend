import { Type } from 'class-transformer';
import {
  IsDate,
  IsObject,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

class MessageInfoDto {
  @IsString()
  readonly message: string;

  @IsString()
  readonly user: string;

  @IsString()
  readonly response: string;

  @IsString()
  readonly date: string;
}

export class CreateMessageDto {
  @IsString()
  readonly user: string;

  @IsOptional()
  @Type(() => MessageInfoDto)
  @ValidateNested()
  readonly messageInfo: MessageInfoDto;
}
