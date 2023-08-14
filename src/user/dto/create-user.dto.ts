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
  readonly messageCoin: number;

  @IsNumber()
  readonly freeCoin: number;

  @IsString()
  readonly finishDate:string;

  @IsString()
  readonly lastLogin:string;

}
