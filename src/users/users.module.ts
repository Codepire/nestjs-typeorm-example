import { Module } from '@nestjs/common';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { ConfigsModule } from 'src/config/config.module';

@Module({
  imports: [TypeOrmModule.forFeature([User]), ConfigsModule],
  providers: [UsersResolver, UsersService],
})
export class UsersModule {}
