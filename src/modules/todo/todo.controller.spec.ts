import { ITodoService } from "./todo.service";
import { ITodoController, TodoController } from "./todo.controller";
import { ITodo } from "./todo.entity";
import { CreateTodoDTO, UpdateTodoDTO } from "./todo.repository";

class MockTodoService implements ITodoService {
  create(dto: CreateTodoDTO): Promise<ITodo> {
    return Promise.resolve({
      ...dto,
      id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }
  update(dto: UpdateTodoDTO): Promise<ITodo> {
    return Promise.resolve({
      ...dto,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }
  list() {
    return Promise.resolve([]);
  }
}

describe("TodoController", () => {
  let mockService: ITodoService;
  let controller: ITodoController;
  beforeAll(() => {
    mockService = new MockTodoService();
    controller = new TodoController({
      _todoService: mockService,
    });
  });

  describe("getTodos()", () => {
    afterEach(() => {
      jest.clearAllMocks();
    });
    describe("Happy paths", () => {
      it("should be defined", () => {
        expect(controller.getTodos).toBeDefined();
      });
      it("should return a list", async () => {
        const result = await controller.getTodos();
        expect(result.length).toBeDefined();
      });
    });
    describe("Unhappy paths", () => {
      it("should throw an error when the service throws an error", () => {
        const mockImplementation = async () => {
          throw new Error();
        };
        jest.spyOn(mockService, "list").mockImplementation(mockImplementation);
        expect(controller.getTodos()).rejects.toThrow(Error);
        expect(mockService.list).toHaveBeenCalled();
      });
    });
  });

  describe("updateTodo()", () => {});
});
