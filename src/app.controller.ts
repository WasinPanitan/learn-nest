import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateCatDto } from './cats/dto/create-cat.dto';
import { CatsService } from './cats/cats.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly catsService: CatsService,
  ) {}

  @Get()
  getHello() {
    return this.catsService.findAll();
  }

  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto);
  }
}
