import { Todo } from "./todo.entity";
import { dataSource } from "@/data-source";
export const todoRepository = dataSource.getRepository(Todo);
