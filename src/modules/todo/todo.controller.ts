import { Request, Response } from "express";
import { TodoService } from "./todo.service";

export class TodoController {
  _todoService: TodoService;

  constructor({ _todoService }: { _todoService: TodoService }) {
    this._todoService = _todoService;
    this.getTodos = this.getTodos.bind(this);
  }

  async getTodos(req: Request, res: Response) {
    const results = await this._todoService.list();
    return res.json({
      data: results,
    });
  }
}
