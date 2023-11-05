import { Module } from '@nestjs/common';
import { ConfigsModule } from 'src/config/config.module';
import { DataSourceService } from './dataSource.service';

@Module({
  imports: [DataSourceModule, ConfigsModule],
  providers: [DataSourceService],
  exports: [DataSourceService],
})
export class DataSourceModule {}
