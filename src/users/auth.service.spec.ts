import { Test } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { Repository } from 'typeorm';
import { User } from './user.entity';

it('can create an instance of auth service', async () => {
  // Create a fake copy of UserRepo
  const fakeUserRepo = {
    find: () => Promise.resolve([]),
    findOneBy: () => Promise.resolve({}),
    save: (userBody: any) => Promise.resolve(userBody),
  };

  const module = await Test.createTestingModule({
    providers: [
      AuthService,
      {
        provide: Repository<User>,
        useValue: fakeUserRepo,
      },
    ],
  }).compile();

  const service = module.get(AuthService);

  expect(service).toBeDefined();
});
