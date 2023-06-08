import { Type } from 'class-transformer';
import { IsOptional, IsString, ValidateNested } from 'class-validator';

class MessageInfoDto {
  @IsString()
  readonly user: string;

  @IsString()
  readonly response: string;

  @IsString()
  readonly date: string;

  @IsString()
  readonly whom: string;
}

export class CreateMessageDto {
  @IsString()
  readonly user: string;

  @IsString()
  readonly response: string;

  @IsString()
  readonly date: string;

  @IsString()
  readonly whom: string;
}
