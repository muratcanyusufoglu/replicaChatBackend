import { IsDate, IsString } from 'class-validator';

export class CreateDalleDto {
  @IsString()
  readonly prompt: string;

  @IsString()
  readonly user: string;

  @IsString()
  readonly userId: string;

  @IsString()
  readonly response: string;
}
