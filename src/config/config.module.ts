import { Module } from '@nestjs/common';
import { ConfigsService } from './config.service';

@Module({
  providers: [ConfigsService],
  exports: [ConfigsService],
})
export class ConfigsModule {}
