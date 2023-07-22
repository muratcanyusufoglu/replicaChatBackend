import { Type } from 'class-transformer';
import { IsArray, IsString, ValidateNested } from 'class-validator';

class MessageArray {
  @IsString()
  readonly message: string;

  @IsString()
  readonly response: string;

  @IsString()
  readonly date: string;
}

export class CreateMessageDto {
  @IsString()
  readonly userId: string;

  @IsString()
  readonly userPhoto: string;

  @IsString()
  readonly whom: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MessageArray)
  readonly messageArray: MessageArray[];
}
