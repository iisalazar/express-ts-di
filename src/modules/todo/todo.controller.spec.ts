import { ITodoService } from "./todo.service";
import { ITodoController, TodoController } from "./todo.controller";

class MockTodoService implements ITodoService {
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
});
