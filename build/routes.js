"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const todo_1 = require("./modules/todo");
exports.router = (0, express_1.Router)();
exports.router.use("/todo", todo_1.TodoEndpoint);
