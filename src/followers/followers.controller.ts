import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { FollowService } from './followers.service';
import { CreateFollowDto } from './dto/create-followers.dto';
import { UpdateFollowersDto } from './dto/update-followers.dto';

@Controller('follower')
export class FollowController {
  constructor(private readonly followService: FollowService) {}

  @Get()
  findAll(@Query() paginationQuery) {
    return this.followService.findAll();
  }

  @Get(':id')
   findOne(@Param('id') followerId: string) {
     console.log(typeof followerId);
     return this.followService.findOne(followerId);
   }
  
  @Get('withInfos/:id')
  findOneAllInfo(@Param('id') followerId: string) {
     console.log(typeof followerId);
     return this.followService.findOneAllInfo(followerId);
   }

  @Post()
  create(@Body() createFollowDto: CreateFollowDto) {
    console.log(createFollowDto instanceof CreateFollowDto);
    return this.followService.create(createFollowDto);
  }

  @Patch(':id')
  update(@Param('id') id:string, @Body() updateFollowersDto:UpdateFollowersDto){
    return this.followService.update(id, updateFollowersDto);
  }

  @Patch('addFollowingId:followerId')
  addFollowingId(@Param('followerId') followerId:string, @Body() updateFollowersDto:UpdateFollowersDto){
    return this.followService.update(followerId, updateFollowersDto);
  }

  @Delete('deleteUser/:followId/:followerId')
  remove(@Param('followId') followId: string, @Param('followerId') followerId: string) {
    return this.followService.remove(followId, followerId);
  }
}
