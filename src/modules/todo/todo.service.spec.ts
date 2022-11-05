import { TodoService } from "./todo.service";
import { testDataSource } from "@/test/testDataSource";
import { getTodoRepository } from "./todo.repository";
import { Repository } from "typeorm";
import { Todo } from "./todo.entity";

describe("TodoService", () => {
  let service: TodoService;
  let repository: Repository<Todo>;
  beforeAll(() => {
    repository = getTodoRepository(testDataSource);
    service = new TodoService({ _todoRepository: repository });
  });

  describe("list()", () => {
    describe("Happy paths", () => {
      it("should be defined", () => {
        expect(service.list).toBeDefined();
      });
      it("should return a list of todos", async () => {
        await repository.save([
          {
            description: "Todo description 1",
          },
          {
            description: "Todo description 2",
          },
          {
            description: "Todo description 3",
          },
        ]);
        const result = await service.list();
        expect(result.length).toEqual(3);
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
