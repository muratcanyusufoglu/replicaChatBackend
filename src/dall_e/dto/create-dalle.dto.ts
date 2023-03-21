import { IsDate, IsNumber, IsString } from 'class-validator';

export class CreateDalleDto {
  @IsString()
  readonly prompt: string;

  @IsString()
  readonly user: string;

  @IsString()
  readonly userId: string;

  @IsString()
  readonly userPhoto: string;

  @IsString()
  readonly response: string;

  @IsNumber()
  readonly likeNumber: number;
}
