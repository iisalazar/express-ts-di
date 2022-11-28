import { ITodo } from "./todo.entity";
import { Kysely } from "kysely";
import { Database } from "@/config/db";
export type CreateTodoDTO = {
  description: string;
};

export type UpdateTodoDTO = {
  id: number;
  description: string;
};

export type DeleteTodoDTO = {
  id: number;
};
export interface ITodoRepository {
  find: () => Promise<ITodo[]>;
  findOne: (params: any) => Promise<ITodo>;
  create: (dto: CreateTodoDTO) => Promise<ITodo>;
  update: (dto: UpdateTodoDTO) => Promise<ITodo>;
  delete: (dto: DeleteTodoDTO) => Promise<void>;
}

export class TodoRepository implements ITodoRepository {
  private __dataSource: Kysely<Database>;

  constructor(datasource: Kysely<Database>) {
    this.__dataSource = datasource;
  }

  async find(): Promise<ITodo[]> {
    const todos = await this.__dataSource
      .selectFrom("todo")
      .selectAll()
      .execute();
    return todos as ITodo[];
  }
  async findOne(params: any): Promise<ITodo> {
    const todo = await this.__dataSource
      .selectFrom("todo")
      .selectAll()
      .where("id", "=", params.id)
      .limit(1)
      .executeTakeFirstOrThrow();
    return todo as ITodo;
  }
  async create(dto: CreateTodoDTO): Promise<ITodo> {
    const { description } = dto;

    const result = await this.__dataSource
      .insertInto("todo")
      .values({
        description,
      })
      .executeTakeFirst();
    const todoId = Number(result.insertId);
    console.log(
      "🚀 ~ file: todo.repository.ts ~ line 56 ~ TodoRepository ~ create ~ todoId",
      todoId
    );
    const todo = await this.__dataSource
      .selectFrom("todo")
      .selectAll()
      .where("todo.id", "=", todoId)
      .executeTakeFirstOrThrow();
    return todo as ITodo;
  }
  async update(dto: UpdateTodoDTO): Promise<ITodo> {
    const { description } = dto;

    await this.__dataSource
      .updateTable("todo")
      .set({
        description,
        updatedAt: new Date(),
      })
      .where("id", "=", dto.id)
      .executeTakeFirst();
    const todo = await this.__dataSource
      .selectFrom("todo")
      .selectAll()
      .where("id", "=", dto.id)
      .executeTakeFirstOrThrow();
    return todo as ITodo;
  }
  async delete(dto: DeleteTodoDTO) {
    await this.__dataSource
      .deleteFrom("todo")
      .where("id", "=", dto.id)
      .executeTakeFirstOrThrow();
  }
}
