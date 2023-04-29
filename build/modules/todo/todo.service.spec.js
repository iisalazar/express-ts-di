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
const todo_service_1 = require("./todo.service");
const testDataSource_1 = require("../../test/testDataSource");
const todo_repository_1 = require("./todo.repository");
describe("TodoService", () => {
    let service;
    let repository;
    beforeAll(() => {
        repository = (0, todo_repository_1.getTodoRepository)(testDataSource_1.testDataSource);
        service = new todo_service_1.TodoService({ _todoRepository: repository });
    });
    describe("list()", () => {
        describe("Happy paths", () => {
            it("should be defined", () => {
                expect(service.list).toBeDefined();
            });
            it("should return a list of todos", () => __awaiter(void 0, void 0, void 0, function* () {
                yield repository.save([
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
                const result = yield service.list();
                expect(result.length).toEqual(3);
            }));
        });
        describe("Unhappy paths", () => {
            it("should return an emplty list of todos", () => __awaiter(void 0, void 0, void 0, function* () {
                const result = yield service.list();
                expect(result.length).toEqual(0);
            }));
        });
    });
});
