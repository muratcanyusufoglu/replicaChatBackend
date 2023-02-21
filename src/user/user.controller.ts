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
  import { UserService } from './user.service';
  import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
  //import { UpdateCoffeeDto } from './dto/update-coffee.dto';
  
  @Controller('users')
  export class UserController {
    constructor(private readonly userService: UserService) {}
  
    @Get()
    findAll(@Query() paginationQuery) {
      return this.userService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id') userId: string) {
       console.log(typeof userId);
       return this.userService.findOne(userId);
    }
  
    @Post()
    create(@Body() createUserDto: CreateUserDto) {
      console.log(createUserDto instanceof CreateUserDto);
      return this.userService.create(createUserDto);
    }

    @Patch(':id')
    update(@Param('id') id:string, @Body() updateUserDto: UpdateUserDto){
      return this.userService.update(id, updateUserDto);
    }
  }
  