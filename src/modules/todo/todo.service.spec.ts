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
      throw new Error("Function not implemented.");
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
});
