import { Todo } from "./todo.entity";
import { Repository } from "typeorm";

export interface ITodoService {
  list: () => Promise<Todo[]>;
}
export class TodoService implements ITodoService {
  private _todoRepository: Repository<Todo>;

  constructor({ _todoRepository }: { _todoRepository: Repository<Todo> }) {
    this._todoRepository = _todoRepository;
  }

  async list(): Promise<Todo[]> {
    const results = await this._todoRepository.find();
    return results;
  }
}
