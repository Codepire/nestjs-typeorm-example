import { ConfigsService } from 'src/config/config.service';
import { DataSource, DataSourceOptions } from 'typeorm';

export class DataSourceService {
  constructor(private readonly configsService: ConfigsService) {}

  DataSourceConfig(): DataSourceOptions {
    return {
      type: 'postgres',
      ...this.configsService.databaseConfig,
    };
  }
}


// exporting data-source for migrations 
const dataSourceServiceInstance: DataSourceService = new DataSourceService(
  new ConfigsService(),
);
export default new DataSource(dataSourceServiceInstance.DataSourceConfig());
