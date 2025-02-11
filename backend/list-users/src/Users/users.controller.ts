import { Controller, Get, Post, Body, Param, Delete, Query, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, UpdateUserDTO } from '../Users/dto/userDTO';


@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  GetUsers(@Query('page') page: number, @Query('limit') limit: number) {

    if (page && limit) {
      return this.usersService.GetUsers(page, limit)
    }
    return this.usersService.GetUsers(1, 11)
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.usersService.getUserById(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDTO) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  deleleUser(@Param('id') id: string) {
    return this.usersService.deleleUser(id);
  }
}
