import { Todo } from "./todo.entity";
import { Repository } from "typeorm";

export class TodoService {
  _todoRepository: Repository<Todo>;

  constructor({ _todoRepository }: { _todoRepository: Repository<Todo> }) {
    this._todoRepository = _todoRepository;
  }

  async list() {
    const results = await this._todoRepository.find();
    return results;
  }
}
