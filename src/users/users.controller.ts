import { Body, Controller, Post, UseInterceptors } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { SerializeInterceptor } from 'src/interceptors/serialize.interceptor';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @UseInterceptors(SerializeInterceptor)
  @Post('/signup')
  createUser(@Body() body: CreateUserDto) {
    console.log('handler ', body);
    return this.userService.create(body.email, body.password);
  }
}
