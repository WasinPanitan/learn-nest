import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { randomBytes, scrypt as _scrypt } from 'crypto';
import { promisify } from 'util';

const scrypt = promisify(_scrypt);

@Injectable()
export class AuthService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  async signup(email: string, password: string) {
    const users = await this.repo.find({ where: { email: email } });
    if (users.length) {
      throw new BadRequestException('Email already in use');
    }

    const salt = randomBytes(8).toString('hex');

    const hash = (await scrypt(password, salt, 32)) as Buffer;

    const result = salt + '.' + hash.toString('hex');

    const user = await this.repo.save({ email, password: result });

    return user;
  }
}
