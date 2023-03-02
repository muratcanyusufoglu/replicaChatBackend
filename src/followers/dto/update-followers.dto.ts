import { PartialType } from '@nestjs/mapped-types';
import { CreateFollowDto } from './create-followers.dto';
export class UpdateFollowersDto extends PartialType(CreateFollowDto) {}