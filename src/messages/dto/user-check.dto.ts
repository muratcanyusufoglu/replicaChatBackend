import { Type } from 'class-transformer';
import { IsArray, IsString, ValidateNested } from 'class-validator';

export class UserCheckDto {
  @IsString()
  readonly userId: string;

  @IsString()
  readonly userPhoto: string;

  @IsString()
  readonly whom: string;

  @IsString()
  readonly question: string;
}
