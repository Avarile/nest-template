import { Controller, Post, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/create')
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Post(`/queryall`)
  findAll() {
    return this.usersService.findAll();
  }

  @Post('/queryone')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Post('/update')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Post('/delete')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
