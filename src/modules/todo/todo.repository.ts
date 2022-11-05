import { Todo } from "./todo.entity";
import { DataSource, Repository } from "typeorm";

export function getTodoRepository(dataSource: DataSource): Repository<Todo> {
  const todoRepository = dataSource.getRepository(Todo);
  return todoRepository;
}
