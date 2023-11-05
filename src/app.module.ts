import { Module } from '@nestjs/common';
import { ConfigsModule } from './config/config.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSourceModule } from './database/dataSource.module';
import { ConfigsService } from './config/config.service';

@Module({
  imports: [
    ConfigsModule,
    DataSourceModule,
    TypeOrmModule.forRootAsync({
      inject: [ConfigsService],
      imports: [ConfigsModule],
      useFactory: async (configsService: ConfigsService) => {
        const dataSourceConfig = configsService.databaseConfig;
        return {
          type: 'postgres',
          ...dataSourceConfig,
        };
      },
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    UsersModule,
  ],
})
export class AppModule {}
