import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { UserDto } from './dto/user.dto';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Serialize(UserDto)
  @Post('/signup')
  createUser(@Body() body: CreateUserDto) {
    console.log('handler ', body);
    return this.userService.create(body.email, body.password);
  }
}
