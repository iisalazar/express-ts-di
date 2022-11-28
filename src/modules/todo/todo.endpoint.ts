import { Router, Request, Response } from "express";
import { TodoController } from "./todo.controller";
import { TodoService } from "./todo.service";
import { TodoRepository } from "./todo.repository";
import { dataSource } from "@/config/db";

export const TodoEndpoint = Router();

const todoRepository = new TodoRepository(dataSource);
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
  try {
    const result = await todoController.createTodo(req.body);
    return res.status(201).json({
      data: result,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server error: ",
    });
  }
});

TodoEndpoint.put("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await todoController.updateTodo({ id, ...req.body });
    return res.status(201).json({
      data: result,
    });
  } catch (error) {
    console.log(
      "🚀 ~ file: todo.endpoint.ts ~ line 42 ~ TodoEndpoint.put ~ error",
      error
    );

    return res.status(500).json({
      message: "Server error: ",
    });
  }
});
