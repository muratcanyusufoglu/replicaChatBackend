import { IsDate, IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  readonly user: string;

  @IsString()
  readonly userId: string;

  @IsString()
  readonly userPhoto: string;

  @IsString()
  readonly packageName:string;

  @IsNumber()
  readonly messageCoin: string;

  @IsNumber()
  readonly freeCoin: string;

  @IsString()
  readonly finishDate:string;

}
