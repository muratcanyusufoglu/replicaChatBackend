import { IsDate, IsString } from 'class-validator';

export class CreateDalleDto {
  @IsString()
  readonly message: string;

  @IsString()
  readonly user: string;

  @IsString()
  readonly response: string;
}
