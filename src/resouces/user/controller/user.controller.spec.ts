import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from '../service/user.service';

describe('UserController', () => {
  let controller: UserController;
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService]
    }).compile();

    controller = module.get<UserController>(UserController);
    service = module.get<UserService>(UserService);
  });

  describe('findAll', () => {
    it("should return an array of users", async () => {
      const users = [{name: "itumeleng"}];
      // jest.spyOn(service, "getUsers").mockResolvedValueOnce(users);
      expect(await controller.getUsers()).toBe(users);''
    })
  })
});
