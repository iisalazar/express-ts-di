import { ITodo } from "./todo.entity";
import { ITodoRepository } from "./todo.repository";
import { CreateTodoDTO } from "./todo.repository";
export interface ITodoService {
  list(): Promise<ITodo[]>;
  create(dto: CreateTodoDTO): Promise<ITodo>;
}
export class TodoService implements ITodoService {
  private _todoRepository: ITodoRepository;

  constructor({ _todoRepository }: { _todoRepository: ITodoRepository }) {
    this._todoRepository = _todoRepository;
  }
  async create(dto: CreateTodoDTO): Promise<ITodo> {
    const todo = await this._todoRepository.create(dto);
    return todo;
  }

  async list(): Promise<ITodo[]> {
    const results = await this._todoRepository.find();
    return results;
  }
}
