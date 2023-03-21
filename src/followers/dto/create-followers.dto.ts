import { IsDate, IsString } from 'class-validator';

export class CreateFollowDto {
  @IsString()
  readonly follower: string;

  @IsString()
  readonly following: string;

  @IsString()
  readonly followerId: string;

  @IsString()
  readonly followingId: string [];

  @IsString()
  readonly followingPhoto: string;

  
}
