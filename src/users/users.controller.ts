import { Controller, Post, Body, Param, HttpCode } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { QueryUserDto } from './dto/query-user.dto';

import { UserResponseInterceptorDecorator } from 'src/interceptors/controller/response.interceptor.user';
import { UserResponseDefaultDto } from './dto/user.response.default.dto';

@UserResponseInterceptorDecorator(UserResponseDefaultDto)
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/create')
  @HttpCode(200)
  async create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Post(`/queryall`)
  @HttpCode(200)
  async queryAll(@Body() queryUserDto: QueryUserDto) {
    return await this.usersService.queryAll(queryUserDto);
  }

  @Post('/findall')
  @HttpCode(200)
  async findAll() {
    return await this.usersService.findAll();
  }

  @Post('/queryone')
  @HttpCode(200)
  async findOne(@Body() queryUserDto: QueryUserDto) {
    return await this.usersService.findOne(queryUserDto);
  }

  @Post('/update')
  async update(@Body() updateUserDto: UpdateUserDto) {
    return await this.usersService.update(updateUserDto);
  }

  @Post('/delete')
  @HttpCode(200)
  async remove(@Body('id') id: string) {
    return await this.usersService.remove(+id);
  }
}
