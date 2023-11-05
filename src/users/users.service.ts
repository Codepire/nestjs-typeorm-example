import { Injectable } from '@nestjs/common';
import { UsersInput } from './inputs/user.input';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, SelectQueryBuilder } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async findUsers(usersInput: UsersInput): Promise<User[]> {
    const usersQueryBuilder: SelectQueryBuilder<User> =
      this.usersRepository.createQueryBuilder('user');

    const users: User[] = await usersQueryBuilder
      .where('user.username = :username', { username: usersInput.username })
      .getMany();

    return users;
  }
}
