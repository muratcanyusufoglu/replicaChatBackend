import { Type } from 'class-transformer';
import { IsOptional, IsString, ValidateNested } from 'class-validator';

export class CreateLastMessageDto {
  @IsString()
  readonly user: string;

  @IsString()
  readonly response: string;

  @IsString()
  readonly date: string;

  @IsString()
  readonly whom: string;
}
