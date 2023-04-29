import { Router, Request, Response } from "express";
import { TodoController } from "./todo.controller";
import { TodoService } from "./todo.service";
import { getTodoRepository } from "./todo.repository";
import { appDataSource } from "@/data-source";
export const TodoEndpoint = Router();

const todoRepository = getTodoRepository(appDataSource);
export const todoService = new TodoService({ _todoRepository: todoRepository });
const todoController = new TodoController({ _todoService: todoService });

// register endpoints
// middlewares, input validation, etc. are in here
TodoEndpoint.get("/", async (req: Request, res: Response) => {
  const results = await todoController.getTodos();
  return res.json({
    data: results,
  });
});

TodoEndpoint.post("/", async (req: Request, res: Response) => {
  const result = await todoController.create();
  return res.json({
    data: result,
  });
});
