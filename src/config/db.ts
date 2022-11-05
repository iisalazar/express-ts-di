import { DataSource, DataSourceOptions } from "typeorm";
import { Todo } from "../modules/todo/todo.entity";

export function createDataSource(overrideConfig?: DataSourceOptions) {
  let options: DataSourceOptions = {
    type: "mysql",
    synchronize: true,
    logging: false,
    dropSchema: false,
    entities: [Todo],
  };
  const env = process.env.NODE_ENV || "development";
  if (env === "production")
    Object.assign(options, { url: process.env.MYSQL_CONNECT_URL });
  else
    Object.assign(options, {
      host: process.env.MYSQL_HOST || "localhost",
      username: process.env.MYSQL_USERNAME || "dev",
      password: process.env.MYSQL_PASSWORD || "dev",
      database: process.env.MYSQL_DATABASE || "dev",
      port: +(process.env.MYSQL_PORT || 3306),
    });
  if (overrideConfig) {
    options = { ...overrideConfig };
  }
  return new DataSource(options);
}
