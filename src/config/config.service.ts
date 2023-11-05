import { Injectable } from '@nestjs/common';
import { config } from 'dotenv';

config({path: '.development.env'});

@Injectable()
export class ConfigsService {
  get databaseConfig() {
    return {
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB,
      port: parseInt(process.env.DB_PORT),
      host: process.env.DB_HOST,
      entities: ['dist/*/entities/*.entity.js'],
      migrations: ['dist/database/migrations/*js'],
      synchronize: Boolean(process.env.DB_SYNCHRONIZE)
    };
  }
}
