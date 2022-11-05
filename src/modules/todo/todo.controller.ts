import { Todo } from "./todo.entity";
import { ITodoService } from "./todo.service";

export interface ITodoController {
  getTodos: () => Promise<Todo[]>;
  create: (dto?: any) => Promise<any>;
}

export class TodoController implements ITodoController {
  _todoService: ITodoService;

  constructor({ _todoService }: { _todoService: ITodoService }) {
    this._todoService = _todoService;
  }

  async getTodos() {
    const results = await this._todoService.list();
    return results;
  }

  async create(dto?: any) {
    return Promise.resolve({});
  }
}
