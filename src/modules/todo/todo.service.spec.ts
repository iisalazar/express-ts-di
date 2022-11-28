import { TodoService } from "./todo.service";
import { ITodoRepository } from "./todo.repository";
import { ITodo } from "./todo.entity";

describe("TodoService", () => {
  let service: TodoService;
  let repository: ITodoRepository = {
    find: function (): Promise<ITodo[]> {
      return Promise.resolve([]);
    },
    findOne: function (params: any): Promise<ITodo> {
      throw new Error("Function not implemented.");
    },
    create: function (dto: { description: string }): Promise<ITodo> {
      throw new Error("Function not implemented.");
    },
    update: function (dto: {
      id: number;
      description: string;
    }): Promise<ITodo> {
      const { id, description } = dto;
      return Promise.resolve({
        id,
        description,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    },
    delete: function (dto: { id: number }): Promise<void> {
      throw new Error("Function not implemented.");
    },
  };
  beforeAll(() => {
    service = new TodoService({ _todoRepository: repository });
  });

  describe("list()", () => {
    describe("Happy paths", () => {
      it("should be defined", () => {
        expect(service.list).toBeDefined();
      });
      it("should return a list of todos", async () => {
        const result = await service.list();
        expect(result.length).toEqual(0);
      });
    });
    describe("Unhappy paths", () => {
      it("should return an emplty list of todos", async () => {
        const result = await service.list();
        expect(result.length).toEqual(0);
      });
    });
  });

  describe("update()", () => {
    describe("Happy paths", () => {
      it("should be defined", () => {
        expect(service.update).toBeDefined();
      });
      it("should return an updated todo", async () => {
        const payload = {
          id: 1,
          description: "I am description",
        };
        const result = await service.update(payload);
        expect(result).toEqual({
          ...payload,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      });
    });
  });
});
