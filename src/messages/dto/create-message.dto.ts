import { IsDate, IsString } from 'class-validator';

export class CreateMessageDto {
  @IsString()
  readonly message: string;

  @IsString()
  readonly user: string;

  @IsString()
  readonly date: string;
}
