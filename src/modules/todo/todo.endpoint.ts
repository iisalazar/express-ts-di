import { Router } from "express";
import { TodoController } from "./todo.controller";
import { TodoService } from "./todo.service";
import { todoRepository } from "./todo.repository";
export const TodoEndpoint = Router();

// create instance of dependencies
export const todoService = new TodoService({ _todoRepository: todoRepository });
const todoController = new TodoController({ _todoService: todoService });

// register endpoints
TodoEndpoint.get("/", todoController.getTodos);
