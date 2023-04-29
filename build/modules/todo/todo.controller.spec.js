"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const todo_controller_1 = require("./todo.controller");
class MockTodoService {
    list() {
        return Promise.resolve([]);
    }
}
describe("TodoController", () => {
    let mockService;
    let controller;
    beforeAll(() => {
        mockService = new MockTodoService();
        controller = new todo_controller_1.TodoController({
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
            it("should return a list", () => __awaiter(void 0, void 0, void 0, function* () {
                const result = yield controller.getTodos();
                expect(result.length).toBeDefined();
            }));
        });
        describe("Unhappy paths", () => {
            it("should throw an error when the service throws an error", () => {
                const mockImplementation = () => __awaiter(void 0, void 0, void 0, function* () {
                    throw new Error();
                });
                jest.spyOn(mockService, "list").mockImplementation(mockImplementation);
                expect(controller.getTodos()).rejects.toThrow(Error);
                expect(mockService.list).toHaveBeenCalled();
            });
        });
    });
});
