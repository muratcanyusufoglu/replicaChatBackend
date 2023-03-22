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
import { DalleService } from './dalle.service';
import { CreateDalleDto } from './dto/create-dalle.dto';
import { UpdateDalleDto } from './dto/update-dalle.dto';
//import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('dalle')
export class DalleController {
  httpService: any;
  constructor(private readonly dalleService: DalleService) {}

  @Get()
  findAll(@Query() paginationQuery) {
    return this.dalleService.findAll();
  }

  @Get('createImage/:prompt')
  getOpenAI(@Param('prompt') question: string) {
    return this.dalleService.getOpenAI(question);
  }

  @Get('findPersonalImages/:userId')
  findFromUserId(@Param('userId') userId: string) {
    return this.dalleService.findFromUserId(userId);
  }

  @Get('findFollowingWithArray/:userIds')
  findFromUserIds(@Param('userIds') userIds: string) {
    return this.dalleService.findFromUserIds(userIds);
  }

  @Get('downloadImage/:imageUrl')
  download(@Param('imageUrl') imageUrl: string) {
      return this.dalleService.download(imageUrl);
  }

  @Post()
  create(@Body() createDalleDto: CreateDalleDto) {
    console.log(createDalleDto instanceof CreateDalleDto);
    return this.dalleService.create(createDalleDto);
  }

  @Patch(':id')
  update(@Param('id') id:string, @Body() updateDalleDto:UpdateDalleDto){
    return this.dalleService.update(id, updateDalleDto);
  }
}
