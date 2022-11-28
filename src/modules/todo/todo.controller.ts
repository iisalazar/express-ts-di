import { ITodo } from "./todo.entity";
import { ITodoService } from "./todo.service";

export interface ITodoController {
  getTodos: () => Promise<ITodo[]>;
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
    console.log(
      "🚀 ~ file: todo.controller.ts ~ line 22 ~ TodoController ~ create ~ dto",
      dto
    );
    const result = await this._todoService.create(dto);
    return result;
  }
}
