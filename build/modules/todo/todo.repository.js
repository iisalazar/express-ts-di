"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTodoRepository = void 0;
const todo_entity_1 = require("./todo.entity");
function getTodoRepository(dataSource) {
    const todoRepository = dataSource.getRepository(todo_entity_1.Todo);
    return todoRepository;
}
exports.getTodoRepository = getTodoRepository;
