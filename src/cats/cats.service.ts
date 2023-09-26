import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

@Injectable()
export class CatsService {
  private readonly cats = [];

  create(createCatDto: CreateCatDto) {
    console.log(createCatDto);
    this.cats.push(createCatDto);
    return 'This action adds a new cat';
  }

  findAll() {
    return this.cats;
  }

  findOne(id: number) {
    return `This action returns a #${id} cat`;
  }

  update(id: number, updateCatDto: UpdateCatDto) {
    console.log(updateCatDto);
    return `This action updates a #${id} cat`;
  }

  remove(id: number) {
    return `This action removes a #${id} cat`;
  }
}
