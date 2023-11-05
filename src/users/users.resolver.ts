import { Args, Query, Resolver } from '@nestjs/graphql';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';
import { UsersInput } from './inputs/user.input';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => [User])
  async findUsers(@Args('usersInput') usersInput: UsersInput): Promise<User[]> {
    return await this.usersService.findUsers(usersInput);
  }
}
