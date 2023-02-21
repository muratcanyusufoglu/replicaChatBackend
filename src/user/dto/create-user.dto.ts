import { IsDate, IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  readonly user: string;

  @IsString()
  readonly userId: string;

  @IsString()
  readonly userPhoto: string;

  @IsNumber()
  readonly gptToken: string;

  @IsNumber()
  readonly dalleToken: string;

  @IsNumber()
  readonly freeToken: string;
}
