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
exports.todoService = exports.TodoEndpoint = void 0;
const express_1 = require("express");
const todo_controller_1 = require("./todo.controller");
const todo_service_1 = require("./todo.service");
const todo_repository_1 = require("./todo.repository");
const data_source_1 = require("../../data-source");
exports.TodoEndpoint = (0, express_1.Router)();
const todoRepository = (0, todo_repository_1.getTodoRepository)(data_source_1.appDataSource);
exports.todoService = new todo_service_1.TodoService({ _todoRepository: todoRepository });
const todoController = new todo_controller_1.TodoController({ _todoService: exports.todoService });
// register endpoints
// middlewares, input validation, etc. are in here
exports.TodoEndpoint.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const results = yield todoController.getTodos();
    return res.json({
        data: results,
    });
}));
exports.TodoEndpoint.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield todoController.create();
    return res.json({
        data: result,
    });
}));
