import { ITodo } from "@/modules/todo";
import {
  Kysely,
  PostgresDialect,
  Generated,
  ColumnType,
  Selectable,
  Insertable,
  Updateable,
  MysqlDialect,
} from "kysely";
import { createPool } from "mysql2";

interface TodoTable {
  id: Generated<number>;
  description: string;
  createdAt: Generated<Date>;
  updatedAt: Generated<Date>;
}

export interface Database {
  todo: TodoTable;
}

export const dataSource = new Kysely<Database>({
  dialect: new MysqlDialect({
    pool: createPool({
      host: "localhost",
      database: "dev",
      password: "dev",
      user: "dev",
    }),
  }),
});
