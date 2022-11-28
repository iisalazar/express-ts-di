import { ITodo } from "./todo.entity";
import { ITodoService } from "./todo.service";

export interface ITodoController {
  getTodos: () => Promise<ITodo[]>;
  createTodo: (dto?: any) => Promise<any>;
  updateTodo(dto: any): Promise<ITodo>;
}

export class TodoController implements ITodoController {
  _todoService: ITodoService;

  constructor({ _todoService }: { _todoService: ITodoService }) {
    this._todoService = _todoService;
  }
  async updateTodo(dto: any): Promise<ITodo> {
    const result = await this._todoService.update(dto);
    return result;
  }

  async getTodos() {
    const results = await this._todoService.list();
    return results;
  }

  async createTodo(dto?: any) {
    const result = await this._todoService.create(dto);
    return result;
  }
}
