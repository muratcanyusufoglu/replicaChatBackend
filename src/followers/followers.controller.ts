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
//import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('follower')
export class FollowController {
  constructor(private readonly followService: FollowService) {}

  @Get()
  findAll(@Query() paginationQuery) {
    return this.followService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   console.log(typeof id);
  //   return this.followService.findOne(id);
  // }

  @Post()
  create(@Body() createFollowDto: CreateFollowDto) {
    console.log(createFollowDto instanceof CreateFollowDto);
    return this.followService.create(createFollowDto);
  }
}
